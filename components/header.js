import styles from "./layout.module.css";
import Head from "next/head";
export default function Header(props) {
  return (
    <div>
      <Head><title>{props.title}</title></Head>
      {props.header.length !== 0 && <img src={props.header} />}
      <div className={styles.header}>
        <div className={styles.headerrow}>
          <h1>{props.title}</h1>
          <h2>
            {props.context}
          </h2>
        </div>
      </div>
      </div>
  );
}
