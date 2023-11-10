import React, { useEffect } from 'react';
import styles from './About.module.scss';
import storyImg from "../../images/AboutImage/story.png"
import { useDispatch, useSelector } from 'react-redux';
import { getWorkers } from '../../store';
import slice from "../../images/AboutImage/slice.png";
import pickled from "../../images/AboutImage/pickled.png";
import bake from "../../images/AboutImage/bake.png";
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
// import video from "../../videos/video.mp4";
import { motion } from 'framer-motion'




export const About = () => {
    const dispatch = useDispatch()
    const { workers } = useSelector((state) => state.workers)

    useEffect(() => {
        dispatch(getWorkers())
    }, [])



    return (
        <div className={styles.about}>
            <section className={styles.aboutMain}>
                <motion.div 
                  animate={{ x: 0 }}
                  initial={{ x: 1000 }}
                  durantion={{ x: 1 }}  
                  className='container'>
                    <h1 className={styles.aboutMain__title}>Who We Are</h1>
                    <p className={styles.aboutMain__description}>The most important thing for us is to give you the comfortable dining experience</p>
                </motion.div>
            </section>
            <section className={styles.aboutStory}>
                <div className='container'>
                    <div className={styles.aboutStory__cover}>
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: -1000 }}
                            durantion={{ x: 1 }}
                            className={styles.aboutStory}>
                            <h2 className={`${styles.aboutStory__title} ${'title'}`}>Our Story</h2>
                            <p className={`${styles.aboutStory__description} ${'description'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
                        </motion.div>
                        <motion.img
                            animate={{ x: 0 }}
                            initial={{ x: 1000 }}
                            durantion={{ x: 1 }}
                            className={styles.aboutStory__img} src={storyImg} alt="story" />
                    </div>
                </div>
            </section>

            <section className={styles.aboutWorkers}>
                <div className='container'>
                    <motion.div
                        animate={{ x: 0 }}
                        initial={{ x: -1000 }}
                        durantion={{ x: 1 }}
                        className={styles.aboutWorkers__wrapper}>
                        {workers.map((worker) => (
                            <div key={worker.id}>
                                <p className={`${styles.aboutWorkers__subtitle} ${'subtitle'}`} to="/workers">{worker.post}</p>
                                <p className={`${styles.aboutWorkers__description} ${'description'}`}>{worker.name}</p>
                                <img src={worker.img} alt="" />
                                <p className={`${styles.aboutWorkers__text}  ${'description'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* <section className={styles.aboutVideo}>
                <div className="fullContainer">
                    <div className={styles.aboutVideo__wrapper}>
                       <video autoPlay muted loop>
                        <source src={video} type="video/mp4"/>
                       </video>
                    </div>
                </div>
            </section> */}


            <section className={styles.aboutProcess}>
                <div className="container">
                    <div className={styles.aboutProcess__wrapper}>
                        <h2 className={`${styles.aboutProcess__title} ${'title'}`}>Sophisticated Process</h2>

                        <div className={styles.aboutProcess__recipe}>
                            <div className={styles.aboutProcess__recipe__top}>
                                <img src={slice} alt="slice" />
                                <motion.div
                                    animate={{ x: 0 }}
                                    initial={{ x: -1000 }}
                                    durantion={{ x: 1 }}
                                    className={styles.aboutProcess__slice__text}>
                                    <h3 className={styles.aboutProcess__recipe__title}>01.Slice</h3>
                                    <p className={`${styles.aboutProcess__description} ${'description'}`}> pLorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Purus lorem id penatibus imperdiet. Turpis egestas ultricies
                                        purus auctor tincidunt lacus nunc.
                                        Convallis pellentesque quis fringilla sagittis.
                                        Egestas in risus sit nunc nunc, arcu donec nam etiam.
                                    </p>
                                </motion.div>
                            </div>
                            <div className={styles.aboutProcess__recipe__bottom}>
                                <motion.div
                                    animate={{ x: 0 }}
                                    initial={{ x: 1000 }}
                                    durantion={{ x: 1 }}
                                    className={styles.aboutProcess__bake}>
                                    <h3 className={styles.aboutProcess__recipe__title}>03.Bake</h3>
                                    <p className={`${styles.aboutProcess__description} ${'description'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                                    <img src={bake} alt="bake" />
                                </motion.div>
                                <motion.div
                                    animate={{ x: 0 }}
                                    initial={{ x: -1000 }}
                                    durantion={{ x: 1 }}
                                    className={styles.aboutProcess__pickled}>
                                    <img src={pickled} alt="pickled" />
                                    <h3 className={styles.aboutProcess__recipe__title}> 02.Pickled</h3>
                                    <p className={`${styles.aboutProcess__description} ${'description'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.aboutBook}>
                <div className="container">
                    <div className={styles.aboutBook__wrapper}>
                        <h2 className={`${styles.aboutBook__title} ${'title'}`}>Make a Reservation</h2>
                        <p className={`${styles.aboutBook__description} ${'description'}`}>Get in touch with restaurant</p>


                        <form>
                            <input type="date" id="date" name="date" required placeholder='16/22/21' />
                            <select id="time" name="times">
                                <option value="2:00 pm">2:00 pm</option>
                                <option value="3:00 pm">3:00 pm</option>
                                <option value="4:00 pm">4:00 pm</option>
                                <option value="5:00 pm">5:00 pm</option>
                            </select>

                            <select id="time" name="times">
                                <option value="2 Person">2 Person</option>
                                <option value="3 Person">3 Person</option>
                                <option value="4 Person">4 Person</option>
                                <option value="5 Person">5 Person</option>
                            </select>
                        </form>

                        <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.85 }}
                            transition={{
                                durantion: 0.125,
                                ease: "easeInOut"
                            }}
                            className={`${styles.aboutBook__btn} ${"formBtn"}`}>Book Now</motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

