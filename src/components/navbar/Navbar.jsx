import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

import { FaAngleDown, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BurgerButton } from './BurgerButton';

export const Navbar = () => {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <nav className={styles.navbar}>
           <div className={styles.burger}>
              <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>
        <div className={`${styles.contentNavbar}`}>

          <div className={`${styles.menu}`}>

            <div className={`${styles.links} ${clicked ? `${styles.active}` : ''}`}>
              <Link 
                  className={styles.logo}
                  to="/"
              >
                  CHICKS GOLD
              </Link>
              <Link to="/" className={styles.link}>Currency <FaAngleDown className={styles.iconAngle} /></Link>
              <Link to="about" className={styles.link}>Items <FaAngleDown className={styles.iconAngle} /></Link> 
              <Link to="about" className={styles.link}>Accounts <FaAngleDown className={styles.iconAngle} /></Link> 
              <Link to="about" className={styles.link}>Services <FaAngleDown className={styles.iconAngle} /></Link> 
              <Link to="about" className={styles.link}>Swap <FaAngleDown className={styles.iconAngle} /></Link> 
              <Link to="about" className={styles.link}>Sell <FaAngleDown className={styles.iconAngle} /></Link>
            </div>  

          </div>
          <div className={styles.contentLogin}>
            <Link to="/" className={styles.link}>usd <FaAngleDown className={styles.iconAngle} /></Link>
            <Link to="about" className={`${styles.link} ${styles.cartLogin}`}><FaShoppingCart /> cart (5)</Link>
            <button className={styles.btnLogin}>SIGN IN <FaUserAlt className={styles.iconUser}/></button>
          </div>  
        </div>
      </nav>

       
    </>
  );
};
