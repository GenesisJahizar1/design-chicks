import styles from "./Card.module.css";
import { VscCircleFilled } from "react-icons/vsc";
import { CgCrowdfire } from "react-icons/cg";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";

export const Card = ( { game } ) => {
  const url = game.img;
  return (
    <div className={styles.card}>
        <div className={styles.contentCard}>
          <div className={styles.col}>
            <p className={styles.textSale}>
              <VscCircleFilled className={styles.iconCircle} /> {game.sale}
            </p>
            <button className={styles.btnStock}>{game.stock}</button>
            <img 
             width={50}
             height={50}
             src={url}
             alt=""/>
            <p className={styles.textname}>{game.title}</p>
          </div>
          <div className={styles.col}>
            <div className={styles.countSelect}>
                <p className={styles.absolute}>1</p>
                <TiArrowSortedUp className={`${styles.absolute} ${styles.iconArr1}`} />
                <TiArrowSortedDown className={`${styles.absolute} ${styles.iconArr2}`} />
            </div>
            <div className={styles.contFire}><CgCrowdfire className={styles.iconCard} /></div>
          </div>
        </div>
        <div className={styles.details}>
            <p className={styles.cost}>{game.cost} 
              <span className={styles.prePrice}>
                <span className={styles.white}>{game.preCost}</span>
              </span>
            </p>
            <p className={styles.description}>{game.description}</p>
        </div>
        <div className={styles.buttoms}>
          <button className={`${styles.buttom} ${styles.btnD}`}>DETAILS</button>
          <button className={`${styles.buttom} ${styles.btnA}`}>
            <span className={styles.spanAdd}>ADD</span> 
            <div className={styles.contCart}>
              <FaShoppingCart className={styles.cartBtn} />
            </div>
          </button>
        </div>
    </div>
  )
}
