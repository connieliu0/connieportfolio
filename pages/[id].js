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

const components = { Section, Row }

export default function Post({ source, frontMatter }) {
  return (
    <div>
       <Header
        title={frontMatter.title}
        context={frontMatter.context}
        header={frontMatter.header}
        role={frontMatter.role}
        time={frontMatter.time}
      />
      <Layout>
      <MDXRemote {...source} components={components} />
      </Layout>
      <div className={utilStyles.galleryrow}>
        <Link href="/">
          <h2>← Back to home</h2>
        </Link>
        {frontMatter.next.length !== 0 && (
          <Link href={frontMatter.next}>
            <h2>Next Project →</h2>
          </Link>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const mdxSource = await serialize(postData.content, {
    // MDX's available options, on https://github.com/hashicorp/next-mdx-remote#options
    scope: postData,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })
  return { props: { source: mdxSource, frontMatter: postData } }
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
