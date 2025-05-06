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
// import { parseCookies } from 'nookies'
// import React from 'react'
// import PasswordPromptDialog from '../components/password.js'
const components = { Section, Row }

export default function Post({ source, frontMatter }) {
  // Comment out authentication check
  // const [authenticated, setAuthenticated] = React.useState(isLoggedIn)
  // if (!authenticated) {
  //   return <PasswordPromptDialog onSubmit={() => setAuthenticated(true)} />
  // }

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
      <MDXRemote {...source} components={components} />
      </Layout>
      <div className={utilStyles.galleryrow}>
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
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  return { 
    props: { 
      source: mdxSource, 
      frontMatter: postData,
      // isLoggedIn: false // Removed isLoggedIn prop
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
