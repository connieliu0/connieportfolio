import React from "react";
import { signIn, useSession } from "next-auth/react";
import Header from "../components/header.js";
import Layout from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Page() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <>
          <Header
            title={"Scale AI"}
            context={"Data Quality + Labeling Platform for ML projects"}
            header={"/images/scalecover.png"}
            role={"0 - 1 design, research to shipping"}
            time={"12 weeks"}
          />
          <Layout>
            <h2>
              Below is an overview of my projects. (Figma link{" "}
              <a href="https://www.figma.com/proto/czej4B70ewj3tUa9nQxRun/Scale-Case?page-id=3%3A70&node-id=102%3A5784&viewport=410%2C106%2C0.03&scaling=scale-down&starting-point-node-id=102%3A5784&show-proto-sidebar=1">
                here
              </a>
              )
            </h2>
          </Layout>
          <div className="figma">
            {
              <iframe
                width="1100"
                height="600"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fczej4B70ewj3tUa9nQxRun%2FScale-Case%3Fpage-id%3D3%253A70%26node-id%3D102%253A5784%26viewport%3D410%252C106%252C0.03%26scaling%3Dscale-down%26starting-point-node-id%3D102%253A5784%26show-proto-sidebar%3D1"
                allowfullscreen
              ></iframe>
            }
          </div>
          <Layout>
            <h2>
              Please <a href="mailto:cl2264@cornell.edu">email me</a> if you
              would like to see my process (what I show for portfolio review).
            </h2>
          </Layout>
          <div className={utilStyles.galleryrow}>
            <Link href="/">
              <h2>← Back to home</h2>
            </Link>
            <Link href="/buzzfeed">
              <h2>Next Project →</h2>
            </Link>
          </div>
        </>
      ) : (
        <p>
          <Header
            title={"Scale AI"}
            context={"Data Quality + Labeling Platform for ML projects"}
            header={"/images/scalecover.png"}
            role={"0 - 1 design, research to shipping"}
            time={"12 weeks"}
          />
          <Layout>
            <p>
              While at Scale (a unicorn startup with 7.5B evaluation) I was on
              three product teams where I worked on <strong>11 projects</strong>{" "}
              from design systems to scoping out a new product feature. In each
              team I did the whole product development process - from user
              research to handing off designs to engineers and doing visual QA.
            </p>
            <h4>
              Please <a href="mailto:cl2264@cornell.edu">email me</a> to learn
              more about my design process!{" "}
              <strong>If you have the password</strong>, which is in my
              submitted resume, click on the sign in button below to enter and
              view the full page.
            </h4>
            <button onClick={signIn}>Use Portfolio Password</button>
          </Layout>
          <div className={utilStyles.galleryrow}>
            <Link href="/">
              <h2>← Back to home</h2>
            </Link>
            <Link href="/buzzfeed">
              <h2>Next Project →</h2>
            </Link>
          </div>
        </p>
      )}
    </>
  );
}
