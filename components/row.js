import styles from "./../styles/utils.module.css";

export default function Row({ content1, content2 }) {
  return (
    <div>
        <br/>
        <br/>

    <div className={styles.row}>
      <div className={styles.width370} id = "text" dangerouslySetInnerHTML={{ __html: content1 }} />
      <div className={styles.width450} dangerouslySetInnerHTML={{ __html: content2 }} />
    </div>
    <br/>
    <br/>

    </div>
  );
}
