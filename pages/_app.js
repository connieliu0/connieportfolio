import "../styles/global.css";
import styles from "../styles/utils.module.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <SpeedInsights />
      <Analytics />
      <div className={styles.navcontainer}>
        <Link href="/">
          <h6>❀ CONNIE LIU</h6>
        </Link>
        <div className={styles.marginleft}>
          <div className={styles.lineem}>
            <Link href="/">Design+Code</Link>
            <Link href="/visual">Illos+Graphic</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
      <div className={styles.footer}>
        <p>
          <a href="https://instagram.com/conliuart" target="_blank" rel="noopener noreferrer">instagram </a>✿
          <a href="https://www.linkedin.com/in/connie-liu-617b8b148/" target="_blank" rel="noopener noreferrer">
            {" "}
            linkedin{" "}
          </a>
          ✿<a href="https://www.are.na/connie-liu-kg4ypfp7ry0" target="_blank" rel="noopener noreferrer"> aren.a </a>
        </p>
        <p>🍞 this site was kneaded (coded) from scratch with next.js 🍞 </p>
      </div>
    </div>
  );
}
