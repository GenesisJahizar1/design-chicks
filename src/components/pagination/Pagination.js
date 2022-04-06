import styles from "./Pagination.module.css";
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const Pagination = () => {
  return (
    <div className={styles.contPagination}>
        <ul className={styles.pagination}>
            <li className={`${styles.li} ${styles.link} ${styles.icon}`}>
              <RiArrowLeftSLine className={styles.arrow} />
            </li>
            <li  className={`${styles.li} ${styles.link} ${styles.color}`}>
                1
            </li>
            <li className={styles.li}>
              <Link to="/" className={`${styles.link} ${styles.hoverLink}`}>2</Link>
            </li>
            <li className={styles.li}>
              <Link to="/" className={`${styles.link} ${styles.hoverLink}`}>3</Link>
            </li>
            <li className={styles.li}>
              <Link to="/" className={`${styles.link} ${styles.hoverLink}`}>4</Link>
            </li>
            <li className={styles.li}>
              <Link to="/" className={`${styles.link} ${styles.hoverLink}`}>...</Link>
            </li>
            <li className={styles.li}>
              <Link to="/" className={`${styles.link} ${styles.hoverLink}`}>11</Link>
            </li>
            <li className={styles.li}>
              <Link to="" className={`${styles.link} ${styles.icon} ${styles.hoverArrow}`}>
              <RiArrowRightSLine className={styles.arrow} />
              </Link>
            </li>
        </ul>
    </div>
  )
}
