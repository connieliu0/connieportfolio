import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
export default function Card(props) {
  return (
    <div>
      <Link href={`/${props.link}`}>
        <div className={utilStyles.width425}>
          <img src={props.pic} />{" "}
          <div className={styles.card}>
            <h3>{props.title}</h3>
            <p className={utilStyles.lineem}>{props.type}</p>
            <p className={utilStyles.lineem}>
              <em>{props.role}</em>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
