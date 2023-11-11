import React, { useEffect } from 'react';
import styles from "./Blogs.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getBlogs } from '../../store';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
import { motion, useScroll } from "framer-motion"
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { useTranslation } from 'react-i18next';
import { bottomAnimation, rightAnimation, textAnimation } from '../../components/Animation/Animation';



export const Blogs = () => {
    const dispatch = useDispatch()
    const { blogs } = useSelector((state) => state.blogs)
    console.log(blogs)

    useEffect(() => {
        dispatch(getBlogs())
    }, [])


    // translation function
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    // cart
    const handleClick = (blog) => {
        const { id, ...data } = blog;
        dispatch(addToCart({ ...data, shopItemId: id }))
    }


    return (
        <div className={styles.blogs}>
            <section className={styles.blogsMain}>
                <div className="container">
                    <motion.div
                        animate={{ x: 0 }}
                        initial={{ x: 1000 }}
                        durantion={{ x: 1 }}
                        cursor={3}
                    >
                        <motion.h1 cursor={3} className={`${styles.blogMain__title} ${"title"}`}>{t("blogs.title")}</motion.h1>
                        <motion.p cursor={3} className={`${styles.blogMain__description} ${"description"}`}>{t("blogs.description")}</motion.p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.blogsProducts}>
                <div className='container'>
                    <div className={`${styles.breadCrumbs} ${'breadCrumbs'}`}>
                        <BreadCrumbs />
                    </div>
                    <motion.div initial="hidden" whileInView="visible" className={styles.blogsProducts__wrapper}>
                        {blogs.map((blog) => (
                            <motion.div
                                variants={textAnimation}
                                custom={4}
                                drag
                                dragConstraints={{
                                    left: -20,
                                    right: 20,
                                    top: 5,
                                    bottom: 5
                                }}
                                animate={{ x: 0 }}
                                initial={{ x: -1000 }}
                                durantion={{ x: 1 }}
                                className={styles.blogsProducts__item} key={blog.id}>
                                <motion.img
                                   variants={textAnimation}
                                    custom={1}
                                    whileTap={{
                                        scale: 0.9
                                    }}
                                    src={blog.img} />
                                <button onClick={() => handleClick(blog)} className={styles.orderBtn}>add to cart</button>
                                <motion.p variants={textAnimation} custom={2} className={`${styles.blogsProducts__title}`}>{blog.name}</motion.p>
                                <motion.div variants={textAnimation} custom={3} className={`${styles.blogsProducts__dotted}`}></motion.div>
                                <motion.p variants={textAnimation} custom={4} className={`${styles.blogsProducts__subtitle}`}>{blog.description}</motion.p>
                                <motion.button variants={textAnimation} custom={5} className={styles.blogsProducts__button}><Link to={`/blogs/${blog.id}`}>Read More</Link><BsArrowRight /></motion.button>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

