import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
export default function SmallCard(props) {
  return (
    <div>
      <a href={props.link} target="_blank">
        <div className={utilStyles.width275}>
          <Image priority src={props.pic} height={225} width={275} />{" "}
          <div>
            <h6 className={styles.nomargin}>{props.title}</h6>
            <p className={utilStyles.lineem}>{props.type}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
