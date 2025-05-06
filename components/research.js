import styles from "./../styles/utils.module.css";
import Link from "next/link";
export default function Research(props) {
  return (
    <div className={styles.research}>
      <div className={styles.width370}>
        {props.link.startsWith('http') ? (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <h4>{props.name}</h4>
          </a>
        ) : (
          <Link href={props.link}>
            <h4>{props.name}</h4>
          </Link>
        )}
        <em>
          <p>{props.subtitle}</p>
        </em>
      </div>
    </div>
  );
}
