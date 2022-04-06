import { Card } from "./Card.js";
import styles from "./ContGrid.module.css";
import { RiSortAsc} from "react-icons/ri";
import { BiCaretDown } from "react-icons/bi";
import { games } from "../../games.js";
import { Pagination } from "../pagination/Pagination.js";

export const ContGrid = () => {
  return (
    <div className={`${styles.grid}`}>
        <div className={styles.freatured}>
            <p className={styles.textF}>Showing 15 of 82</p>
            <div className={`${styles.box} ${styles.selectAll}`}>
                <RiSortAsc className={`${styles.absolute} ${styles.swapBag}`} />
                <p className={`${styles.absolute} ${styles.textSmallAll}`}>Sort By</p>
                <p className={`${styles.absolute} ${styles.textSeAll}`}>Featured</p>
                <BiCaretDown className={`${styles.absolute} ${styles.caret}`} />
            </div>
        </div>

        <div className={styles.contGrid}>
           {
             games.map( game => (
              <Card key={game.id} game={game} />
             ))
           }
        </div>
        <Pagination />
    </div>
  )
}
