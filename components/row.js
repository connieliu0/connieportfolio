import styles from "./../styles/utils.module.css";

export default function Row({ content1, content2 }) {
  return (
    <div>
        <br/>
        <br/>

    <div className={styles.row}>
      <div className={styles.width370} dangerouslySetInnerHTML={{ __html: content1 }} />
      <div className={styles.width550} dangerouslySetInnerHTML={{ __html: content2 }} />
    </div>
    <br/>
    <br/>

    </div>
  );
}
