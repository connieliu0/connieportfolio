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
          <h1>
            Connie is a cross-functional designer with a background in research
            and code fascinated with scaling systems ✿{" "}
          </h1>
          <p>
            Previously at Scale AI, The New York Times, BuzzFeed, and various
            startups (KP Fellows){" "}
          </p>
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
        {allPostsData.slice(0, 4).map(({ id, title, pic, type }) => (
          <Card pic={pic} title={title} link={id} type={type} />
        ))}
      </div>
      <Section name="CASE STUDIES" />
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
      </div>
    </div>
  );
}
