import React, { useEffect, useState } from 'react'
import styles from "./Portfolio.module.scss"
import { getPortfolio, getPortfolioByCategory } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion"
import { bottomAnimation, rightAnimation, textAnimation } from '../../components/Animation/Animation';

export const Portfolio = () => {

    // all portfolio request
    const dispatch = useDispatch()
    const { portfolio } = useSelector((state) => state.portfolio)
    useEffect(() => {
        dispatch(getPortfolio())
    }, [])


    // portfolio category request with all portfolio request
    const [activeButton, setActiveButton] = useState("all")
    const handleClickFilterBtn = (category) => {
        if (category === "all") {
            dispatch(getPortfolio())
        } else {
            dispatch(getPortfolioByCategory(category))
        }
        setActiveButton(category)
    }
    console.log(activeButton)


    return (
        <div className={styles.portfolio}>

            <section className={styles.portfolioMain}>
                <div className='container'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible">
                        <motion.h1
                            variants={rightAnimation}
                            custom={2}
                            animate={{ x: 0 }}
                            durantion={{ x: 1 }}
                            className={styles.portfolioMain__title}>Portfolio-Grids
                        </motion.h1>
                    </motion.div>

                </div>
            </section>

            <section className={styles.portfolioMenu}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        animate={{ x: 0 }}
                        durantion={{ x: 1 }}
                        className={styles.portfolioMenu__filter}>
                        <motion.button custom={3} variants={textAnimation} onClick={() => handleClickFilterBtn("all")} className={activeButton === "all" && styles.activeButton}>All</motion.button>
                        <motion.button custom={3} variants={textAnimation} onClick={() => handleClickFilterBtn("starter")} className={activeButton === "starter" && styles.activeButton}>Starter</motion.button>
                        <motion.button custom={3} variants={textAnimation} onClick={() => handleClickFilterBtn("launch")} className={activeButton === "launch" && styles.activeButton}>Launch</motion.button>
                        <motion.button custom={3} variants={textAnimation} onClick={() => handleClickFilterBtn("dinner")} className={activeButton === "dinner" && styles.activeButton}>Dinner</motion.button>
                        <motion.button custom={3} variants={textAnimation} onClick={() => handleClickFilterBtn("drinks")} className={activeButton === "drinks" && styles.activeButton}>Drinks</motion.button>
                        <motion.button custom={3} variants={textAnimation} onClick={() => handleClickFilterBtn("sweets")} className={activeButton === "sweets" && styles.activeButton}>Sweets</motion.button>
                        <motion.button custom={3} variants={textAnimation} onClick={() => handleClickFilterBtn("fruits")} className={activeButton === "fruits" && styles.activeButton}>Fruits</motion.button>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        animate={{ x: 0 }}
                        durantion={{ x: 1 }}
                        className={styles.portfolioMenu__wrapper}>
                        {portfolio.map((menu) => (
                            <motion.div initial="hidden" whileInView="visible" className={styles.portfolioMenu__item} key={menu.id}>
                                <motion.p variants={textAnimation} custom={4}  transition={{ durantion: 3}} >{menu.descr}</motion.p>
                                <motion.img variants={textAnimation} custom={4} src={menu.img} alt="image" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

