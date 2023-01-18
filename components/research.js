import styles from "./../styles/utils.module.css";

export default function Research(props) {
  return (
    <div className={styles.research}>
      <div className={styles.width425}>
        <a href={props.link} target="_blank">
          <h4>{props.name}</h4>{" "}
        </a>
        <em>
          <p>{props.subtitle}</p>
        </em>
      </div>
    </div>
  );
}
