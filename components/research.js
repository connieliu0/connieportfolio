import styles from "./../styles/utils.module.css";

export default function Research(props) {
  return (
    <div className={styles.research}>
      <div className={styles.width425}>
        <a href={props.link} target="_blank">
          <h3>{props.name}</h3>{" "}
        </a>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
