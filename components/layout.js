import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Three from "./three.js";
import { MDXProvider } from "@mdx-js/react";
import SmoothScroll from './smooth-scroll'
import Footnotes from './footnotes';

export default function Layout({ children, home }, props) {
  return (
    <MDXProvider components={{ Three }}>
      <SmoothScroll />
      <Footnotes />
      <div className={styles.layout}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Connie Liu's Portfolio" />
        </Head>
        <main className={utilStyles.noClickImage}>{children}</main>
      </div>
    </MDXProvider>
  );
}
