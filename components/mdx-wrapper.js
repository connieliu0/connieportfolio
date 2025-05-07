import styles from '../styles/utils.module.css';

export default function MDXWrapper({ children }) {
  return (
    <div className={styles.noClickImage}>
      {children}
    </div>
  );
} 