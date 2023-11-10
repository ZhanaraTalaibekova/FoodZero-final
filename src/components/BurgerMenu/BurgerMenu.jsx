import React, { useState } from 'react';
import navigationClose from '../../images/HeaderImage/NaviClose.svg';
import { Link } from 'react-router-dom';
import instagram from "../../images/FooterImage/instagram.svg";
import facebook from "../../images/FooterImage/facebook.svg"
import twitter from "../../images/FooterImage/twitter.svg"
import youtube from "../../images/FooterImage/youtube.svg"
import styles from "./BurgerMenu.module.scss";



export const BurgerMenu = ({ hidden, setHidden }) => {
 


    return (
        <div className={styles.burgerMenu}>
            <div className="burgerMenu__container">
                <div className={styles.burgerMenu__content_cover}>
                    <div className={styles.burgerMenu__closeNavigation} >
                        <img src={navigationClose} alt="x" onClick={() => setHidden(true)} />
                    </div>

                    <div className={styles.burgerMenu__content}>
                        <nav>
                            <ul className={styles.burgerMenu__list}>
                                <li className={styles.burgerMenu__item} onClick={() => setHidden(true)}><Link to="./" className={styles.burgerMenu__link}>HOME</Link></li>
                                <li className={styles.burgerMenu__item} onClick={() => setHidden(true)}><Link to="./menu" className={styles.burgerMenu__link}>MENU</Link></li>
                                <li className={styles.burgerMenu__item} onClick={() => setHidden(true)}><Link to="./blogs" className={styles.burgerMenu__link}>BLOGS</Link></li>
                                <li className={styles.burgerMenu__item} onClick={() => setHidden(true)}><Link to="./about" className={styles.burgerMenu__link}>ABOUT</Link></li>
                                <li className={styles.burgerMenu__item} onClick={() => setHidden(true)}><Link to="./portfolio" className={styles.burgerMenu__link}>PORTFOLIO</Link></li>
                                <li className={styles.burgerMenu__item} onClick={() => setHidden(true)}><Link to="./contact" className={styles.burgerMenu__link}>CONTACT</Link></li>
                            </ul>
                        </nav>


                        <div className={styles.burgerMenu__contacts}>
                            <h3 className={styles.burgerMenu__contacts_title}>Contact</h3>
                            <div>
                                <a className={styles.burgerMenu__contacts_number} href="">+86 852 346 000 <br /> info@foodzero.com</a>
                                <p className={styles.burgerMenu__contacts_description}>1959 Sepulveda Blvd. <br />  Culver City, CA, 90230</p>
                            </div>
                            <div className={styles.burgerMenu__icons}>
                                <img src={instagram} alt="instagram" />
                                <img src={twitter} alt="twitter" />
                                <img src={facebook} alt="facebook" />
                                <img src={youtube} alt="youtube" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

