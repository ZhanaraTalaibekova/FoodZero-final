import React from 'react';
import styles from "./Footer.module.scss"
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai"


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <section className={styles.footerSection__top}>
                <div className="container">
                    <div className={styles.footerTop__wrapper}>
                        <h1 className={`${styles.footer__title} ${'subtitle'}`}>Food Zero.</h1>
                        <div className={styles.footer__contacts}>
                            <h2>Contact</h2>
                            <p>+1+86 852 346 000
                                info@foodzero.com</p>
                            <p>1959 Sepulveda Blvd.
                                Culver City, CA, 90230</p>
                        </div>
                        <div className={styles.footer__subscribe}>
                            <h2>Never Miss a Recipe</h2>
                            <div>
                                <input type="text" placeholder='Email Address' />
                                <button>Subscribe</button>
                            </div>
                            <p>Join our subscribers and get best recipe delivered each week!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.footerSection__bottom}>
                <div className='container'>
                    <div className={styles.footerBottom__wrapper}>
                        <p className='description'>© 2020 Zero Inc. All rights Reserved</p>
                        <div className={styles.footerBottom__svg}>
                            <AiOutlineInstagram />
                            <AiOutlineTwitter />
                            <AiOutlineFacebook />
                            <AiOutlineYoutube/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

