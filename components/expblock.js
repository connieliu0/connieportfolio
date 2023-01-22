import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export default function ExpBlock(props) {
  return (
    <div>
      <div className={styles.exprow}>
        <Image
          src={`/exp/${props.title}.png`}
          width="50"
          height="50"
          className={styles.marginright}
        />
        <div className={styles.exp}>
          <h5>
            {props.title} • {props.time}
          </h5>
          <p>{props.description} </p>
        </div>
      </div>
    </div>
  );
}
