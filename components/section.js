import styles from "./layout.module.css";

export default function Section(props) {
  return (
    <div className={styles.line}>
      <h6>{props.name}</h6>
    </div>
  );
}
