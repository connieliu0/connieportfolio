import styles from '../styles/utils.module.css';

export default function MDXImage({ src, alt }) {
  return (
    <img 
      src={src} 
      alt={alt || ''} 
      className={styles.mdxImage}
      onClick={(e) => e.preventDefault()}
      style={{ pointerEvents: 'none' }}
    />
  );
} 