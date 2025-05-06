import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Section from "../components/section";
import Research from "../components/research";
import utilstyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import SmallCard from "../components/smallcard";
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  try {
    const allPostsData = await getSortedPostsData('research');
    return {
      props: {
        allPostsData,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        allPostsData: [],
      },
    };
  }
}

export default function Researchcode({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Research and Code</title>
      </Head>
      <div className={utilstyles.row}>
      <div class="animate-text delay-1">
          <h1>
            Beyond design, I enjoy critically examining technology with research
            and code ⚘
          </h1>
          <p>

              ✎ Check out a website I made as an abstraction of self:{" "}
              <a href="https://connie.surf" target="_blank">
                connie.surf
              </a>
          </p>
        </div>
        <Image class="animate-text delay-1"
          src={`/art/headerillos1.png`}
          height={180}
          width={144}
          margin-right={20}
        />{" "}
      </div>
      <div class="animate-text delay-2">
      <Section name="RESEARCH ON AI-FUTURES" />
      <div className={styles.galleryrow}>
          {allPostsData.slice(0,2).map(({ id, title, subtitle }) => (
            <Research name={title} subtitle={subtitle} link={id} />
          ))}
        </div>
      <Section name="RESEARCH ON ICT4D" />
      <div className={utilstyles.galleryrow}>
        <Research
          name="“Fact-checks are for the Top 0.1%”: Examining Reach,
          Awareness, and Relevance of Fact-Checking in Rural India"
          subtitle="2022, Published in ACM CSCW"
          link="https://drive.google.com/file/d/1-M5135iIvryrAhIIVdbmFt6He5aLGpRe/view"
        />
        <Research
          name="Improving the Gender Digital Divide in ICT: A Closer Look at Ghana, South Africa, and India"
          subtitle="2021, Published in ACM COMPASS"
          link="https://drive.google.com/file/d/1WHGkG2l7mKBCkYRjdxcuEtkZRm5Z2Kwk/view"
        />
      </div>
      <Section name="CODE" />
      <div className={utilstyles.galleryrow}>
        <SmallCard
          pic="/images/surf.png"
          title="EXPERIMENTAL WEBSITE"
          type="2023, Javascript"
          link="https://connie.surf/"
        />
        <SmallCard
          pic="/images/gsoc.png"
          title="p5.js Showcase"
          type="Summer 2020, React.js"
          link="https://old.connie-liu.me/p5.js-showcase/#/"
        />
        <SmallCard
          pic="/images/viz.png"
          title="HATE CRIMES DATAVIZ"
          type="Spring 2021, d3.js"
          link="https://old.connie-liu.me/info3300_project2/"
        />
      </div>
      <p>
          ✎ More coding links:{" "}
          <a href="https://github.com/connieliu0" target="_blank">
            Github
          </a>
          ,{" "}
          <a
            href="https://medium.com/processing-foundation/increasing-the-organization-and-scope-of-the-p5-js-showcase-7193ef558c5a"
            target="_blank"
          >
            Google Summer of Code Article
          </a>
      </p>
      </div>

    </>
  );
}
