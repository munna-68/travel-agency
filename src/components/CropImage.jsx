import styles from './CropImage.module.css';

export default function CropImage({ src, alt, position = 'center center', ratio = '4 / 5', className = '' }) {
  return (
    <div className={`${styles.frame} ${className}`} style={{ aspectRatio: ratio }}>
      <img className={styles.image} style={{ objectPosition: position }} src={src} alt={alt} />
    </div>
  );
}
