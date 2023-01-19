import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "../components/layout.module.css";
import utilstyles from "../styles/utils.module.css";
import Section from "../components/section";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
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
              Product designer from Pennsylvania studying Data Science, UX and
              CS at Cornell. On a mission to design sustainable systems to
              empower the world.
            </em>
          </p>
          <p>
            I love 0 to 1 design, as it's where I can leverage my skillset in
            design, research, and code (I made this website!) and have worked
            for six different companies ranging in size and mission. Beyond
            work, I enjoy bringing people together to drive change. At
            <a href="https://www.cornellh4i.org/"> Hack4Impact</a>, I founded
            the design team and led{" "}
            <a href="https://medium.com/hack4impact/reflecting-on-hack4impact-design-as-a-national-director-a5ce7d5dbf63">
              national design education
            </a>
            . I also co-founded an open{" "}
            <a href="https://bit.ly/CUxD">UX Design club</a> at Cornell to
            increase access to a design community. For{" "}
            <a href="https://wicc.cornell.edu/#/">
              Women in Computing at Cornell
            </a>
            , I was VP Brand - making CIS more inclusive through media
            campaigns.
          </p>
          <p>
            I'm deeply interested in how tech intersects with creativity and
            public benefit. On the side, I'm researching fact-checking in India
            under{" "}
            <a href="https://www.adityavashistha.com/">Professor Vashishtha</a>.
            I love curation spaces in all forms having created a{" "}
            <a href="https://showcase.p5js.org">computational art showcase</a>{" "}
            and the layout for{" "}
            <a href="https://reboothq.substack.com/p/back-to-school">
              Kernel (tech)
            </a>{" "}
            magazine. I'm cautious about solutionistism, lately I've wondered{" "}
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
      <Section name="EXPERIENCE" />
      <ul>
        <li>2022 - Scale AI</li>
        <li>2022 - NYTimes</li>
        <li>2021 - BuzzFeed</li>
        <li>2020 - abillion</li>
        <li>2020 - Google Summer of Code</li>
      </ul>
      <Section name="OUTSIDE OF WORK" />
    </>
  );
}
