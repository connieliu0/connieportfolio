import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { Section } from '../components/section.js'  // Make sure this path is correct
import Layout from "../components/layout.js";
import { getAllPostIds, getPostData } from "../lib/posts";
import Header from "../components/header.js";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import  Row  from '../components/row.js'
import TwitterCard from '../components/twitter.js'
import Caption from '../components/caption.js'
import MDXWrapper from '../components/mdx-wrapper.js'
import MDXImage from '../components/mdx-image.js'
import Divider from '../components/divider.js'
import remarkGfm from 'remark-gfm'
import { parseCookies } from 'nookies'
import React from 'react'
import PasswordPromptDialog from '../components/password.js'
// import { parseCookies } from 'nookies'
// import React from 'react'
// import PasswordPromptDialog from '../components/password.js'
const components = { Section, Row, TwitterCard, Caption, wrapper: MDXWrapper, img: MDXImage, hr: Divider, PasswordPromptDialog }

export default function Post({ source, frontMatter, isLoggedIn }) {
  const [authenticated, setAuthenticated] = React.useState(isLoggedIn)
  
  // Only show password prompt for the protected page
  if (frontMatter.id === 'customformula' && !authenticated) {
    return (
              <div className="animate-text delay-1" style={{ maxWidth: '820px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'Lora, serif', marginBottom: '1rem' }}>Protected Content</h1>
          <p style={{ color: '#858585', fontFamily: 'DM Sans, sans-serif' }}>This content requires a password to view.</p>
        </div>
        <PasswordPromptDialog onSubmit={() => setAuthenticated(true)} />
      </div>
    )
  }

  return (
    <div>
      <br/>
      <div className={"animate-text delay-1"}>
      <div className="header">
       <Header
        title={frontMatter.title}
        context={frontMatter.context}
        header={frontMatter.header}
        role={frontMatter.role}
        time={frontMatter.time}
      />
      </div>
      </div>
      <div className={"animate-text delay-2"}>
      <Layout>
        <MDXWrapper>
      <MDXRemote {...source} components={components} />
        </MDXWrapper>
      </Layout>
      <div className={utilStyles.galleryrow} style={{maxWidth: '600px', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto'}}>
        <Link href="/">
          <h3>← Back to home</h3>
        </Link>
        {frontMatter.next.length !== 0 && (
          <Link href={frontMatter.next}>
            <h3>Next Project →</h3>
          </Link>
        )}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { id } = params
  const cookies = parseCookies()

  // Try to load from case-studies first, then research
  let postData
  try {
    postData = await getPostData(id, 'case')
  } catch (e1) {
    try {
      postData = await getPostData(id, 'research')
    } catch (e2) {
      // Not found in either
      return { notFound: true }
    }
  }

  const mdxSource = await serialize(postData.content, {
    // MDX's available options, on https://github.com/hashicorp/next-mdx-remote#options
    scope: postData,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  })

  return { 
    props: { 
      source: mdxSource, 
      frontMatter: postData,
      isLoggedIn: !!cookies.auth_cookie
    } 
  }
}

export async function getStaticPaths() {
  const caseIds = await getAllPostIds('case')
  const researchIds = await getAllPostIds('research')
  // Combine and deduplicate if necessary
  const allIds = [...caseIds, ...researchIds]
  return {
    paths: allIds,
    fallback: false
  }
}
