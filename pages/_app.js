import "../styles/global.css";
import styles from "../styles/utils.module.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

// import { Provider } from "next-auth/client";
// import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <SpeedInsights />
      <Analytics />
      <base target="_blank"></base>
      {/* <SessionProvider session={session} refetchInterval={5 * 60}> */}
      {/* <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider> */}
      <div className={styles.navcontainer}>
        <Link href="/">
          <h6>❀ CONNIE LIU</h6>
        </Link>
        <div className={styles.marginleft}>
          <div className={styles.lineem}>
            <Link href="/">
              <p>Design</p>
            </Link>
            <Link href="/researchcode">
              <p>Research+Code</p>
            </Link>
            <Link href="/visual">
              <p>Visual</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
      <div className={styles.footer}>
        <p>
          <a href="https://instagram.com/conliuart">instagram </a>✿
          <a href="https://www.linkedin.com/in/connie-liu-617b8b148/">
            {" "}
            linkedin{" "}
          </a>
          ✿<a href="https://www.are.na/connie-liu-kg4ypfp7ry0"> aren.a </a>
        </p>
        <p>🍞 this site was kneaded (coded) from scratch with next.js 🍞 </p>
      </div>
      {/* </SessionProvider> */}
    </div>
  );
}
