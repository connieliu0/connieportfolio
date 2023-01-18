import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
export default function Card(props) {
  return (
    <div>
      <Link href={`/${props.link}`}>
        <div className={utilStyles.width425}>
          <Image priority src={props.pic} height={212.5} width={425} />{" "}
          <div className={styles.card}>
            <div className={styles.row}>
              <h6>{props.title}</h6>
              <p className={utilStyles.lineem}>{props.type}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
