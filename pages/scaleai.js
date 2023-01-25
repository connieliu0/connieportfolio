import React from "react";
import { signIn, useSession } from "next-auth/react";
import Header from "../components/header.js";
import Layout from "../components/layout";

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
            <h2>Below is an overview of my projects.</h2>
            {/* <iframe
              style="border: 1px solid rgba(0, 0, 0, 0.1);"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fczej4B70ewj3tUa9nQxRun%2FScale-Case%3Fpage-id%3D3%253A70%26node-id%3D102%253A5784%26viewport%3D-983%252C-208%252C0.29%26scaling%3Dmin-zoom%26starting-point-node-id%3D102%253A5784"
              allowfullscreen
            ></iframe> */}
            <h2>
              Please <a href="mailto:cl2264@cornell.edu">email me</a> if you
              would like to see my process for all my other projects.
            </h2>
          </Layout>
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
              While at Scale I was on three product teams (one of which is
              confidential) where I worked on <strong>11 projects</strong>{" "}
              ranging in scope from design systems to visual alignment
              redesigns. In each team I did the whole product development
              process - from working with product managers to plan user research
              if necessary to handing off designs to engineers and doing visual
              QA.
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
        </p>
      )}
    </>
  );
}
