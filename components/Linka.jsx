import Link from 'next/link';
import styles from '../styles/Linka.module.css';

const Linka = ({ title, href }) => {
  return (
    <Link href={href} className={styles.link}>
      {title}
    </Link>
  );
};

export default Linka;
