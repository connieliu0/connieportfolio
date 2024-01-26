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
                BA in Data Science, UX and CS at Cornell. On a mission to design
                sustainable systems to empower the world.
              </em>
            </p>
            <p>
              I love 0 to 1 design, as it's where I can leverage my skillset in
              design, research, and code (I made this website!) and have worked
              for six different companies ranging in size and mission. Currently
              I'm designing for administrators at Atlassian. Beyond work, I
              enjoy bringing people together to drive change. At
              <a href="https://www.cornellh4i.org/"> Hack4Impact</a>, I founded
              the design team and led{" "}
              <a href="https://medium.com/hack4impact/reflecting-on-hack4impact-design-as-a-national-director-a5ce7d5dbf63">
                national design education
              </a>
              . I also co-founded an open{" "}
              <a href="https://bit.ly/CUxD">UX Design club</a> at Cornell to
              increase access to a design community.
            </p>
            <p>
              I'm deeply interested in how tech intersects with creativity and
              public benefit. Recently, I published a paper to CSCW researching{" "}
              <a href="https://drive.google.com/file/d/1-M5135iIvryrAhIIVdbmFt6He5aLGpRe/view">
                fact-checking in rural India under{" "}
              </a>
              . I love curation spaces in all forms, a while ago I created a{" "}
              <a href="https://showcase.p5js.org">computational art showcase</a>{" "}
              and most recently an
              <a href="https://connie.surf">
                experimental website about myself
              </a>
              . I'm cautious about solutionistism, lately I've wondered{" "}
              <a href="https://dl.acm.org/doi/10.1145/1978942.1979275">
                when to not design technology
              </a>
              .
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
      <div className={utilstyles.galleryrow}>
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
      </div>
      <Section name="a list of things I love ↓ " />
      <div className={utilstyles.galleryrow}>
        <div className={utilstyles.width275}>
          <h2>✎ </h2>
          Doodling for my{" "}
          <a href="https://www.instagram.com/conliuart/">art blog</a>, reading
          and drawing comics. I once had a{" "}
          <a href="https://www.webtoons.com/en/challenge/paper-planes/chapter-one/viewer?title_no=38596&episode_no=2">
            webcomic
          </a>{" "}
          with 18k views!
        </div>
        <div className={utilstyles.width275}>
          <h2>☀ </h2>
          Giving tours in Philadelphia, my favorite (and home) city
        </div>
        <div className={utilstyles.width275}>
          <h2>✉ </h2>
          The poem Leaves by Lloyd Schwartz and indie music, especially Mitski
        </div>
      </div>
    </>
  );
}
