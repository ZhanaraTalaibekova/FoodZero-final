import React, { useEffect, useState } from 'react';
import styles from "./Registration.module.scss";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../store/actions';
import { useNavigate } from 'react-router';


export const Registration = () => {

  const [eye, setEye] = useState(false);


  // register
  const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const { userInfo } = useSelector(state => state.users);


  const onSubmit = (values) => {
    dispatch(registerUser(values))
    console.log(434242)
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // navigate("/");
    }
  }, [userInfo])


  // translation
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }



  return (
    <div>

      <section className={styles.registrationMain}>
        <div className='container'>
        </div>
      </section>

      <section className='container'>
        <h2 className={styles.title}>{t("registration.title")}</h2>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='name'  {...register("name")}/>
            <input type="text" placeholder='surname'  {...register("surname")}/>
            <input type="email" placeholder='email' {...register("email")}/>
            <div>
              <input type={eye ? "text" : "password"} placeholder='password'  {...register("password")} />
              {
                eye ? (
                  <AiFillEye onClick={() => setEye(!eye)} />
                ) : (
                  <AiFillEyeInvisible onClick={() => setEye(!eye)} />)
              }
            </div>
            <button className={`${styles.registrationBtn} ${"formBtn"}`} type='submit'>{t("registration.button")}</button>
          </form>
        </div>
      </section>
    </div>
  );
};


