import React, { useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import styles from "./Login.module.scss";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Login = () => {

    const [eye, setEye] = useState(false);

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <div className={styles.login}>
            <section className={styles.loginMain}>
                <div className='container'>
                </div>
            </section>

            <section className='container'>
                <h2 className={styles.title}>{t("login.title")}</h2>
                <div className={styles.formWrapper}>
                    <form>
                        <input type="email" placeholder='email' />
                        <div>
                            <input type={eye ? "text" : "password"} placeholder='password' />
                            {
                                eye ? (
                                    <AiFillEye onClick={() => setEye(!eye)} />
                                ) : (
                                    <AiFillEyeInvisible onClick={() => setEye(!eye)} />)
                            }
                        </div>
                        <button className={`${styles.loginBtn} ${"formBtn"}`} type='submit'>{t("login.button")}</button>

                        <div className={styles.loginNewUser}>
                            <p className={styles.loginNewUser__title}>New User?</p>
                            <p className={styles.loginNewUser__link}>
                                <Link to="/registration">Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};