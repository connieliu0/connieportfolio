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
        <div class="animate-text delay-1">
          <h1>
            In my free time I'm enamoured by illustrations, print graphics, and
            non-linear narratives ⚘
          </h1>
          <p>
            {" "}
              ✎ More visual links:{" "}
              <a href="https://instagram.com/conliuart" target="_blank">
                Instagram
              </a>{" "}
          </p>
        </div>
        <Image 
          class="animate-text delay-1"
          src={`/art/headerillos3.png`}
          height={200}
          width={150}
          margin-right={20}
        />{" "}
      </div>
      <div class="animate-text delay-2">
      <Section name="2019 to Present" />
      <div className={utilstyles.artgalleryrow}>
        {data.Art.map(({ name, desc }) => (
          <div className={utilstyles.width275}>
            <img src={`/art/${name}`} />
            <p>{desc}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
