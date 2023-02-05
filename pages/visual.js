import Image from "next/image";
import utilstyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Head from "next/head";
import data from "./api/resume.json";
import Section from "../components/section";

export default function Visual() {
  return (
    <>
      <Head>
        <title>Visual Work</title>
      </Head>
      <div className={utilstyles.row}>
        <div>
          <h1>
            In my free time I love illustrations, print graphics, and non-linear
            narratives ⚘
          </h1>
          <h3>
            {" "}
            <em>
              ✎ More visual links:{" "}
              <a href="https://instagram.com/conliuart" target="_blank">
                Instagram
              </a>{" "}
            </em>
          </h3>
        </div>
        <Image
          src={`/art/headerillos3.png`}
          height={200}
          width={150}
          margin-right={20}
        />{" "}
      </div>
      <Section name="2019 to Present" />
      <div className={utilstyles.galleryrow}>
        {data.Art.map(({ name, desc }) => (
          <div className={utilstyles.width275}>
            <img src={`/art/${name}`} />
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
