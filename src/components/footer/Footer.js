import styles from  "./Footer.module.css";
import { SiVisa } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiMastercardFill, RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaDiscord, FaStar } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
        <div className={styles.contPayment}>
            <div className={`${styles.content} ${styles.iconsPt}` }>
                <SiVisa className={styles.visa} />
                <RiMastercardFill className={styles.masterC} />
                <h4 className={styles.americanE}>American Express</h4>
                <h4 className={styles.skrill}>Skrill</h4>
                <p className={styles.textPy}>And 50+ more</p>
            </div>
        </div>
        <div className={styles.social}>
            <div className={`${styles.contSocial} ${styles.content}`}>
                <FaFacebookF className={`${styles.icon} ${styles.facebook}`} />
                <RiInstagramFill className={`${styles.icon} ${styles.instagram}`} />
                <FaTwitter className={`${styles.icon} ${styles.twitter}`} />
                <FaDiscord className={`${styles.icon} ${styles.discord}`} />
            </div>
        </div>
        <div className={`${styles.infoFooter}`}>
            <div className={`${styles.content} ${styles.contInfo}`}>
                <div>
                   <p className={styles.logo}>CHICKS GOLD</p>
                   <p className={styles.email}>support@chicksgold.com</p> 
                </div>
                
                <div className={styles.inf}>
                    <p className={styles.title}>Chicks gold</p>
                    <Link to="" className={styles.link}>Games</Link>
                    <Link to="" className={styles.link}>About Us</Link>
                    <Link to="" className={styles.link}>Blog</Link>
                    <Link to="" className={styles.link}>Sitemap</Link>
                </div>
                <div className={styles.inf}>
                    <p className={styles.title}>Support</p>
                    <Link to="" className={styles.link}>Contact Us</Link>
                    <Link to="" className={styles.link}>FAG</Link>
                </div>
                <div className={styles.inf}>
                    <p className={styles.title}>Legal</p>
                    <Link to="" className={styles.link}>Privacy Policy</Link>
                    <Link to="" className={styles.link}>Terms of Service</Link>
                    <Link to="" className={styles.link}>Copyright Policy</Link>
                </div>
                <div className={styles.star}>
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <p className={styles.textStar}>Truspilot Resviews</p>
                </div>
            </div>
            
        </div>

        <p className={styles.endText}>© 2017 - 2022 Chicksgold.com. All Rights Reserved</p>
        
    </div>
  )
}
