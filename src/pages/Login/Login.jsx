import React, { useEffect, useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import styles from "./Login.module.scss";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion"

export const Login = () => {

    const [eye, setEye] = useState(false);

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }



    // login
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.users);


    const onSubmit = (values) => {
        dispatch(loginUser(values))
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, [userInfo])






    return (
        <div className={styles.login}>
            <section className={styles.loginMain}>
                <div className='container'>
                </div>
            </section>

            <section className='container'>
                <h2 className={styles.title}>{t("login.title")}</h2>
                <div className={styles.formWrapper}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" placeholder='email' {...register("email")} />
                        <div>
                            <input type={eye ? "text" : "password"} placeholder='password' {...register("password")} />
                            {
                                eye ? (
                                    <AiFillEye onClick={() => setEye(!eye)} />
                                ) : (
                                    <AiFillEyeInvisible onClick={() => setEye(!eye)} />)
                            }
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.85 }}
                            transition={{
                                durantion: 0.125,
                                ease: "easeInOut"
                            }}
                            className={`${styles.loginBtn} ${"formBtn"}`} type='submit'>{t("login.button")}</motion.button>

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