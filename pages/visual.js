import Image from "next/Image";
import utilstyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Head from "next/head";
import data from "./api/resume.json";

export default function Visual() {
  return (
    <>
      <Head>
        <title>Visual Work</title>
      </Head>
      <h1>
        In my free time I love illustrations, print graphics, and non-linear
        narratives ⚘
      </h1>
      <div className={utilstyles.galleryrow}>
        <div className={styles.width425}>
          {data.Art.map(({ name }) => (
            <img src={`/art/${name}`} />
          ))}
        </div>
      </div>
    </>
  );
}
