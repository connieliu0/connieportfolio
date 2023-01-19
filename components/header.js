import styles from "./layout.module.css";
export default function Header(props) {
  return (
    <div>
      {props.header.length !== 0 && <img src={props.header} />}
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
