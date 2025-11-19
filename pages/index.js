import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/utils.module.css";
import Link from "next/link";
import Section from "../components/section.js";
import Card from "../components/card.js";
import SmallCard from "../components/smallcard.js";
import Image from "next/image";
import utilstyles from "../styles/utils.module.css";
import Research from "../components/research";
export async function getStaticProps() {
  try {
    const [researchData, allPostsData] = await Promise.all([
      getSortedPostsData('research'),
      getSortedPostsData('case'),
    ]);
    return {
      props: {
        researchData,
        allPostsData,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        researchData: [],
        allPostsData: [],
      },
    };
  }
}

export default function Home({ allPostsData, researchData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connie Liu Portfolio</title>
      </Head>
      <div className={styles.row}>
      <div className="animate-text">
        <h1 className="animate-text delay-1">Connie is a product designer and crafter of tools ✿ </h1>
        <p className="animate-text delay-1">
          Currently at Webflow ✧ previously at Atlassian, Scale AI, NYT,
          BuzzFeed, and KP Fellows. She is perpetually on a quest of{" "}
          <a href="https://www.connie-liu.me/researchcode" target="_blank">
            curiousity
          </a>{" "}
          and{" "}
          <a href="https://www.connie-liu.me/visual" target="_blank">
            self-expression
          </a>
        </p>
      </div>
      <Image
        className="animate-text delay-1"
        priority
        src={"/images/headerillos2.png"}
        height={200}
        width={144}
        margin-right={20}
      />{" "}
      </div>

      <div className="animate-text delay-2">
        <Section name="FEATURED PROJECTS" />
        <div className={styles.galleryrow}>
          {allPostsData.slice(0,6).map(({ id, title, pic, type, role }) => (
            <Card pic={pic} title={title} link={id} type={type} role={role} />
          ))}
        </div>
        <br/>
        <br/>
        <Section name="RESEARCH ON AI-FUTURES" />
      <div className={utilstyles.galleryrow}>
          {researchData.slice(0,2).map(({ id, title, type, date }) => (
            <Research name={title} subtitle={type} time={date} link={id} />
          ))}
        </div>    
        <br/>
        <br/>
        <Section name="MORE PROJECTS" />
        <div className={styles.galleryrow}>
          {allPostsData.slice(6).map(({ id, title, pic, type, role }) => (
            <Card pic={pic} title={title} link={id} type={type} role={role} />
          ))}
        </div>
        <br/>
        <p>
            ✎ More design case studies:{" "}
            <a
              href="https://connieliu.notion.site/Encouraging-Figma-Use-for-Novices-through-Templates-and-Onboarding-ef4e6778175c49fa99595605bf1d1bb8"
              target="_blank"
            >
              Figma Templates Strategy
            </a>
            ,{" "}
            <a
              href="https://uxdesign.cc/finding-your-own-nests-a-twitter-case-study-970d2aa4efd8"
              target="_blank"
            >
              Twitter Groups Case Study
            </a>{" "}
        </p>
        {/* <Section name="CASE STUDIES" />
        <div className={styles.galleryrow}>
          <SmallCard
            pic="/images/h4i.png"
            title="Hack4Impact"
            type="Leading a 50+ student organization that builds software for nonprofits"
            link="/hack"
          />
          <SmallCard
            pic="/images/figma.png"
            title="FIGMA TEMPLATES"
            type="Kleiner Perkins Fellows submission"
            link="https://connieliu.notion.site/Encouraging-Figma-Use-for-Novices-through-Templates-and-Onboarding-ef4e6778175c49fa99595605bf1d1bb8"
          />
          <SmallCard
            pic="/images/twitter.png"
            title="TWITTER GROUPS"
            type="Making it easier to tweet what you want"
            link="https://uxdesign.cc/finding-your-own-nests-a-twitter-case-study-970d2aa4efd8"
          />
        </div> */}
      </div>
    </div>
  );
}
