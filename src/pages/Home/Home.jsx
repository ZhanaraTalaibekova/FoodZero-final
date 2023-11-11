import React from 'react';
import styles from "./Home.module.scss";
import image2 from "../../images/HomeImage/image2.png";
import image3 from "../../images/HomeImage/Image3.png";
import cookImage from "../../images/HomeImage/cook.png";
import leafImage from "../../images/HomeImage/Leaf.png";
import fishImage from "../../images/HomeImage/fish.svg";
import carrotImage from "../../images/HomeImage/carrot.svg";
import lemonImage from "../../images/HomeImage/lemon.svg";
import image1 from "../../images/HomeImage/image1.png";
import scroll from "../../images/HomeImage/image5.png";
import { motion } from "framer-motion"
import { bottomAnimation, rightAnimation, textAnimation } from '../../components/Animation/Animation';




export const Home = () => {
    return (
        <div className={styles.home}>
            <section className={styles.heroSection}>
                <div className='container'>
                    <div className={styles.heroSection__content}>
                        <div className={styles.heroSection__top}>
                            <motion.div custom={4} initial="hidden" whileInView="visible" className={styles.heroSection__top_text}>
                                <motion.h1 custom={4} variants={textAnimation} animate={{ x: 0 }} initial={{ x: -1000 }} durantion={{ x: 1 }}>Healthy Eating
                                    is important
                                    part of lifestyle
                                </motion.h1>
                                <motion.p variants={textAnimation} animate={{ x: 0 }} initial={{ x: -1000 }} durantion={{ x: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</motion.p>
                                <motion.img animate={{ x: 0 }} initial={{ x: -1000 }} durantion={{ x: 1 }} src={scroll} alt="scroll img" />
                            </motion.div>
                            <motion.div custom={4} initial="hidden" whileInView="visible"  className={styles.heroSection__top_img}>
                                <motion.img custom={3} variants={rightAnimation} animate={{ x: 0 }} initial={{ x: 1000 }} durantion={{ x: 1 }} src={image1} alt="meat image" />
                            </motion.div>
                        </div>
                        <motion.div initial="hidden" whileInView="visible" className={styles.heroSection__bottom}>
                            <motion.div custom={3}  variants={textAnimation}  animate={{ x: 0 }} durantion={{ x: 1 }} className={styles.heroSection__bottomLeft}>
                                <motion.img src={image2} alt="spagetti" />
                                <motion.h2 variants={textAnimation} className={`${styles.heroSection__bottomSubtitle} ${'subtitle'}`}>Start to plan your diet today</motion.h2>
                                <motion.p variants={textAnimation} className={`${styles.heroSection__bottomDecription} ${'description'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</motion.p>
                            </motion.div>
                            <motion.div custom={4} variants={rightAnimation} animate={{ x: 0 }} durantion={{ x: 1 }} className={styles.heroSection__bottomRight}>
                                <motion.p  className={`${styles.heroSection__bottomDecription} ${'description'}`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</motion.p>
                                <motion.img variants={rightAnimation} src={image3} alt="grains" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className={styles.cookSection}>
                <div className="container">
                    <div className={styles.cookSection__content}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            animate={{ x: 0 }}
                            durantion={{ x: 1 }}
                            custom={2}
                            className={styles.cookSection__imgCover}>
                            <motion.img custom={2} variants={textAnimation} className={styles.cookSection__img} src={cookImage} alt="cook" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            animate={{ x: 0 }}
                            durantion={{ x: 1 }}
                            custom={3}
                            className={styles.cookSection__text}>
                            <motion.h2 variants={rightAnimation} className={`${styles.cookSection__title} ${"title"}`}>Excellent cook</motion.h2>
                            <motion.p variants={rightAnimation} className={`${styles.cookSection__description} ${"description"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </motion.p>
                            <motion.img variants={rightAnimation} src={leafImage} alt="leaf" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className={styles.adventage}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        animate={{ x: 0 }}
                        durantion={{ x: 1 }}
                        className={styles.adventageContent}>
                        <motion.div
                            variants={textAnimation}
                            custom={2}
                            className={styles.adventageContent__card}>
                            <img src={fishImage} alt="fish" />
                            <h3 >Premium Quality</h3>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu </p>
                        </motion.div>
                        <motion.div
                            variants={textAnimation}
                            custom={3}
                            className={styles.adventageContent__card}>
                            <img src={carrotImage} alt="carrot" />
                            <h3  >Seasonal Vegetables</h3>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                        </motion.div>
                        <motion.div
                            variants={textAnimation}
                            custom={4}
                            className={styles.adventageContent__card}>
                            <img src={lemonImage} alt="lemon" />
                            <h3>Fresh Fruit</h3>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu </p>
                        </motion.div>
                    </motion.div>
                </div >
            </section >
        </div >
    );
};

