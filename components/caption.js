import styles from '../styles/utils.module.css';

export default function Caption({ children }) {
  return (
    <span className={styles.caption}>
      {children}
    </span>
  );
} 