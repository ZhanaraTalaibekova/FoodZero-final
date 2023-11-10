import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/HeaderImage/HeaderLogo.svg';
import navigationOpen from '../../images/HeaderImage/NaviOpen.svg';
import { BurgerMenu } from '../BurgerMenu';
import styles from "./Header.module.scss"
import { useTranslation } from 'react-i18next';
import { motion, useScroll } from "framer-motion"
import { RxAvatar } from "react-icons/rx"
import { Dropdown } from 'antd';
import { useSelector } from 'react-redux';



export const Header = () => {
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.users)

    // translation function
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    // hidden eye of input function
    const [hidden, setHidden] = useState(true);

    const showMenuBtn = () => {
        setHidden(!hidden);
    }

    // change header color on scrolling
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const { scrollYProgress } = useScroll();


    // log out
    const logOut = () => {
        localStorage.removeItem("token");
        navigate("/registration")
    }

    const items = [
        {
            key: "1",
            label: userInfo?.email
        },
        {
            key: "2",
            label: "Profile"
        },
        {
            key: "3",
            label: <button onClick={logOut}>log out</button>
        }
    ]




    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__content}>
                        <div className={styles.header__content_cover}>
                            <div className={styles.header__left}>
                                <Link to="/">
                                    <img className={styles.header__logo} src={logo} alt="logo" />
                                </Link>
                                <button className={styles.header__burgerMenu_button} onClick={showMenuBtn}>
                                    <img className={styles.header__burgerMenu_logo} src={navigationOpen} alt="open navigation" />
                                </button>
                            </div>



                            <div className={styles.header__right}>

                                <div>
                                    <div className={styles.langContent}>
                                        <p onClick={() => changeLanguage("ru")}>RU</p>
                                    </div>
                                    <div className={styles.langContent}>
                                        <p onClick={() => changeLanguage("en ")}>EN</p>
                                    </div>
                                </div>
                                <Dropdown menu={{ items }}>
                                    <RxAvatar size={40} />
                                </Dropdown>


                                <span className={styles.header__number}>
                                    <a className={styles.header__number__link} href={'tel:+996557911669'}>+996557911669</a>
                                </span>
                                <Link className={styles.header__button_cover} to="/blogs">
                                    <button className={styles.header__button}>{t("header.order")}</button>
                                </Link>
                                <Link className={styles.header__button_cover} to="/cart">
                                    <button className={styles.header__button}>{t("header.cart")}</button>
                                </Link>
                                <Link className={styles.header__button_cover} to="/registration">
                                    <button className={styles.header__button}>{t("header.reservation")}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.header__BurgerMenu}>
                {
                    hidden ? null : <BurgerMenu hidden={hidden} setHidden={setHidden} />
                }
            </div>
        </>
    );
};
