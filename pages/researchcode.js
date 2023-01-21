import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Section from "../components/section";
import Research from "../components/research";
import utilstyles from "../styles/utils.module.css";
import SmallCard from "../components/smallcard";

export default function Researchcode() {
  return (
    <>
      <Head>
        <title>Research and Code</title>
      </Head>
      <h1>
        Beyond design, I love investigating new futures with research and
        building through code ⚘
      </h1>
      <Section name="RESEARCH" />
      <div className={utilstyles.galleryrow}>
        <Research
          name="Improving the Gender Digital Divide in ICT: A Closer Look at Ghana, South Africa, and India"
          subtitle="Fall 2021, Published in ACM COMPASS ‘22"
          link="https://drive.google.com/file/d/1mvkjPViXFqJfskEJQo8Xdrk6YQG3AmrM/view?usp=sharing"
        />
        <Research
          name="Examining Human and
          Technological Infrastructures of Fact-Checking in Rural India"
          subtitle="Fall 2022, In-Submission for CSCW"
          link="https://drive.google.com/file/d/1npwB1PUe8KlnzIm10cXuh19TxL3YQ96Y/view?usp=sharing"
        />
        <Research
          name="Student Mental Health Analysis w/ College Reddit Data"
          subtitle="Spring 2022, Text Mining Final Project"
          link="https://github.com/connieliu0/textmining-final/blob/main/project.ipynb"
        />
        <Research
          name="Encouraging Positive Social Media Use to Improve Mental Wellness"
          subtitle="Spring 2021, Qualitative User Research Methods"
          link="https://drive.google.com/file/d/11kyZiwPxJoDplAi2A3KzzhicOBl1cZw3/view?usp=sharing"
        />
      </div>
      <h3>
        {" "}
        <em>
          ✎ More writing on my{" "}
          <a href="https://corny.substack.com" target="_blank">
            Substack
          </a>
        </em>
      </h3>
      <Section name="CODE" />
      <div className={utilstyles.galleryrow}>
        <SmallCard
          pic="/images/viz.png"
          title="HATE CRIMES DATAVIZ"
          type="Spring 2021, d3.js"
          link="https://old.connie-liu.me/info3300_project2/"
        />
        <SmallCard
          pic="/images/gsoc.png"
          title="GOOGLE SUMMER OF CODE"
          type="Summer 2020, React.js"
          link="https://old.connie-liu.me/p5.js-showcase/#/"
        />
        <SmallCard
          pic="/images/old.png"
          title="OLD PORTFOLIO"
          type="2019-2022, React.js"
          link="https://old.connie-liu.me/"
        />
      </div>
      <h3>
        <em>
          ✎ More interesting links:{" "}
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
        </em>
      </h3>
    </>
  );
}
