import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Three from "./three.js";
import { MDXProvider } from "@mdx-js/react";

export default function Layout({ children, home }) {
  return (
    <MDXProvider components={{ Three }}>
      <div className={styles.layout}>
        <main>{children}</main>
        <div className={styles.backToHome}>
          <Link href="/">
            <h2>← Back to home</h2>
          </Link>
        </div>
      </div>
    </MDXProvider>
  );
}
