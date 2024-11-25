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
      <div className={"animate-text delay-1"}>
       <Header
        title={frontMatter.title}
        context={frontMatter.context}
        header={frontMatter.header}
        role={frontMatter.role}
        time={frontMatter.time}
      />
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
