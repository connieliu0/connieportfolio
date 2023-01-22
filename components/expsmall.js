import styles from "./layout.module.css";
export default function ExpSmall(props) {
  return (
    <div>
      <div className={styles.exprow}>
        <div className={styles.exp}>
          <h5>
            {props.name} • {props.role} <em>{props.year} </em>
          </h5>
          <p>{props.desc} </p>
        </div>
      </div>
    </div>
  );
}
