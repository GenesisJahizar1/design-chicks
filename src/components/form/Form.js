
import styles from "./Form.module.css"
import { GiBroadsword } from "react-icons/gi";
import { BiCaretDown, BiSearchAlt2 } from "react-icons/bi";
import { GiSwapBag } from "react-icons/gi";
import { FaFeatherAlt } from "react-icons/fa";


export const Form = () => {
  return (
    <div className={styles.form}>
        <div className={`${styles.box} ${styles.contSelect}`}>
          <GiBroadsword className={`${styles.absolute} ${styles.sword}`} />
          <p className={`${styles.absolute} ${styles.txtSelectGam}`}>Select a game</p>
          <BiCaretDown className={`${styles.absolute} ${styles.caret}`} />
        </div>

        <div className={`${styles.box} ${styles.contInput}`}>
          <input
          type="input" 
          className={`${styles.absolute} ${styles.input}`} 
          name="name" placeholder="Search"
          />
          <BiSearchAlt2 className={`${styles.absolute} ${styles.search}`} />
        </div> 

        <div className={`${styles.box} ${styles.selectAll}`}>
          <GiSwapBag className={`${styles.absolute} ${styles.swapBag}`} />
          <p className={`${styles.absolute} ${styles.textSmallAll}`}>Price</p>
          <p className={`${styles.absolute} ${styles.textSeAll}`}>All</p>
          <BiCaretDown className={`${styles.absolute} ${styles.caret}`} />
        </div>

        <div className={`${styles.box} ${styles.selectAll}`}>
          <FaFeatherAlt className={`${styles.absolute} ${styles.swapBag}`} />
          <p className={`${styles.absolute} ${styles.textSmallAll}`}>Item Tipe</p>
          <p className={`${styles.absolute} ${styles.textSeAll}`}>All</p>
          <BiCaretDown className={`${styles.absolute} ${styles.caret}`} />
        </div>
    </div>
  )
}
