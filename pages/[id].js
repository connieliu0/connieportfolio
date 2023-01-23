import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/posts";
import Header from "../components/header.js";
import { MDXProvider } from "@mdx-js/react";
import Three from "../components//three.js";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <div>
      <Header
        title={postData.title}
        context={postData.context}
        header={postData.header}
        role={postData.role}
        time={postData.time}
      />
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
      <div className={utilStyles.galleryrow}>
        <Link href="/">
          <h2>← Back to home</h2>
        </Link>
        {postData.next.length !== 0 && (
          <Link href={postData.next}>
            <h2>Next Project →</h2>
          </Link>
        )}
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
