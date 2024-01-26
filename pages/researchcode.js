import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Section from "../components/section";
import Research from "../components/research";
import utilstyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import SmallCard from "../components/smallcard";

export default function Researchcode() {
  return (
    <>
      <Head>
        <title>Research and Code</title>
      </Head>
      <div className={utilstyles.row}>
        <div>
          <h1>
            Beyond design, I love investigating new futures with research and
            building through code ⚘
          </h1>
          <h3>
            {" "}
            <em>
              ✎ Check out a more experimental website I made recently:{" "}
              <a href="https://connie.surf" target="_blank">
                connie.surf
              </a>
            </em>
          </h3>
        </div>
        <Image
          src={`/art/headerillos1.png`}
          height={180}
          width={144}
          margin-right={20}
        />{" "}
      </div>
      <Section name="RESEARCH PAPERS" />
      <div className={utilstyles.galleryrow}>
        <Research
          name="“Fact-checks are for the Top 0.1%”: Examining Reach,
          Awareness, and Relevance of Fact-Checking in Rural India"
          subtitle="2022-23, Published in ACM CSCW '24"
          link="https://drive.google.com/file/d/1-M5135iIvryrAhIIVdbmFt6He5aLGpRe/view"
        />
        <Research
          name="Improving the Gender Digital Divide in ICT: A Closer Look at Ghana, South Africa, and India"
          subtitle="2021, Published in ACM COMPASS ‘22"
          link="https://drive.google.com/file/d/1mvkjPViXFqJfskEJQo8Xdrk6YQG3AmrM/view?usp=sharing"
        />
      </div>
      <Section name="CODE" />
      <div className={utilstyles.galleryrow}>
        <SmallCard
          pic="/images/sentiment.png"
          title="COLLEGE MENTAL HEALTH"
          type="2022, Reddit Text Mining w/ NumPy"
          link="https://github.com/connieliu0/textmining-final/blob/main/project.ipynb/"
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
        <SmallCard
          pic="/images/viz.png"
          title="HATE CRIMES DATAVIZ"
          type="Spring 2021, d3.js"
          link="https://old.connie-liu.me/info3300_project2/"
        />
        <SmallCard
          pic="/images/wordle.png"
          title="WORDLE VIZ"
          type="2022, d3.js"
          link="https://old.connie-liu.me/info4310-hw2/static/"
        />
        <SmallCard
          pic="/images/taxi.png"
          title="NYC TAXI VIZ"
          type="2022, d3.js"
          link="https://info4310-final.vercel.app/static/"
        />
      </div>
      <h3>
        <em>
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
        </em>
      </h3>
    </>
  );
}
