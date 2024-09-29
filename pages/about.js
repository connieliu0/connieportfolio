import data from "./api/resume.json";
import Image from "next/image";
import Head from "next/head";
import Block from "../components/expblock.js";
import ExpSmall from "../components/expsmall.js";
import styles from "../components/layout.module.css";
import utilstyles from "../styles/utils.module.css";
import Section from "../components/section";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={styles.profile}>
        <div className={styles.row}>
          <Image
            src="/images/profile.jpg" // Route of the image file
            height={321} // Desired size with correct aspect ratio
            width={220} // Desired size with correct aspect ratio
            alt="profile"
          />
          <div className={utilstyles.width550}>
            <h1 className={utilstyles.margin0}>❀ Hi, I'm Connie!</h1>
            <p>
              <em>
                On a mission to design sustainable systems to empower the world.
              </em>
            </p>
            <p>
              I love 0 to 1 design, as it's where I can leverage my skillset in
              design, research, and code (I made this website!). Currently, I'm working on <a href="https://www.atlassian.com/platform/analytics/what-is-atlassian-analytics">Atlassian Analytics</a> and admin experiences; previously I was at Scale AI, NYTimes, and BuzzFeed. 
              </p>
            <p>
              I'm deeply interested in how tech intersects with creativity and
              public benefit. Recently, I published a paper to CSCW researching{" "}
              <a href="https://drive.google.com/file/d/1-M5135iIvryrAhIIVdbmFt6He5aLGpRe/view">
                fact-checking in rural India
              </a>
              . I also currently serve as Creative Director for <a href="https://joinreboot.org/">Reboot</a>, a publication writing about techno-optimism.
            </p>
            <p>
              Previously, I got a degree in Data and Computer Science at Cornell, where I
              founded the design team at
              <a href="https://www.cornellh4i.org/"> Hack4Impact</a> and
              co-founded an open access{" "}
              <a href="https://bit.ly/CUxD">UX Design club</a>. Before that, I grew up in Pennsylvania, where I originally wanted to be an environmental scientist - a part of me is still tinkering about the  <a href="https://www.are.na/connie-liu-kg4ypfp7ry0/organic-web">organic web</a>.
            </p>
            <p>
              Read more on my{" "}
              <a href="https://drive.google.com/file/d/1hFXY-SyhK6SbAYaHI12ibua6T0GTGITs/view?usp=sharing">
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <div className={utilstyles.galleryrow}>
        <div className={utilstyles.width550}>
          <Section name="WORK EXPERIENCE" />
          {data.Work.map(({ title, year, desc }) => (
            <Block title={title} time={year} description={desc} />
          ))}
        </div>
        <div>
          <div className={utilstyles.width360}>
            <Section name="ACTIVITIES" />
            {data.Other.map(({ name, role, year, desc }) => (
              <ExpSmall name={name} role={role} year={year} desc={desc} />
            ))}
          </div>
        </div>
      </div> */}
      <Section name="a list of things I love ↓ " />
      <div className={utilstyles.galleryrow}>
        <div className={utilstyles.width275}>
          <h2>✎ </h2>
          <p>
            Doodling for my{" "}
            <a href="https://www.instagram.com/conliuart/">art blog</a>, reading
            and drawing <a href="https://www.tiktok.com/@conliuart/">comics</a>.
            I once had a{" "}
            <a href="https://www.webtoons.com/en/challenge/paper-planes/chapter-one/viewer?title_no=38596&episode_no=2">
              webcomic
            </a>{" "}
            with 18k views!
          </p>
        </div>
        <div className={utilstyles.width275}>
          <h2>☀ </h2>
          <p>Giving tours in Philadelphia, my favorite (and home) city</p>
        </div>
        <div className={utilstyles.width275}>
          <h2>✉ </h2>
          <p>
            The poem Leaves by Lloyd Schwartz and indie music, especially Mitski
          </p>
        </div>
      </div>
    </>
  );
}
