import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
export default function Header(props) {
  return (
    <div>
      {props.header.length !== 0 && (
        <Image priority src={props.header} height={325.27} width={960} />
      )}
      <div className={styles.header}>
        <div className={styles.headerrow}>
          <h1>{props.title}</h1>
          <h2>
            {props.context} • {props.time}{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
