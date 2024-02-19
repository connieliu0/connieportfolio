import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/utils.module.css";
import Link from "next/link";
import Section from "../components/section";
import Card from "../components/card";
import SmallCard from "../components/smallcard";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connie Liu Portfolio</title>
      </Head>
      <div className={styles.row}>
        <div>
          <h1>Connie is a product designer and crafter of tools ✿ </h1>
          <em>
            <h3>
              currently at Atlassian ☆ previously at Scale AI, NYT, BuzzFeed,
              and KP Fellows. She is perpetually on a quest of{" "}
              <a href="https://www.connie-liu.me/researchcode" target="_blank">
                curiousity
              </a>{" "}
              and{" "}
              <a href="https://www.connie-liu.me/researchcode" target="_blank">
                self-expression
              </a>
            </h3>
          </em>
        </div>
        <Image
          priority
          src={"/images/headerillos2.png"}
          height={200}
          width={144}
          margin-right={20}
        />{" "}
      </div>
      <Section name="WORK PROJECTS" />

      <div className={styles.galleryrow}>
        <Card
          pic={"/images/scale.png"}
          title={"Scale AI"}
          link={"scale"}
          type={
            "Scale AI is a unicorn startup focused on data quality for ML applications. I worked across three product groups building features ranging from editor setup to data quality management."
          }
        />
        {allPostsData.slice(1, 4).map(({ id, title, pic, type }) => (
          <Card pic={pic} title={title} link={id} type={type} />
        ))}
      </div>
      <h3>
        <em>
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
        </em>
      </h3>
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
  );
}
