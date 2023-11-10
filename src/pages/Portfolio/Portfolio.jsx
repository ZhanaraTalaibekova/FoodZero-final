import React, { useEffect, useState } from 'react'
import styles from "./Portfolio.module.scss"
import { getPortfolio, getPortfolioByCategory } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion"
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
                    <motion.h1
                      animate={{ x: 0 }}
                      initial={{ x: 1000 }}
                      durantion={{ x: 1 }} 
                     className={styles.portfolioMain__title}>Portfolio-Grids</motion.h1>
                </div>
            </section>

            <section className={styles.portfolioMenu}>
                <div className="container">
                    <motion.div
                        animate={{ x: 0 }}
                        initial={{ x: -1000 }}
                        durantion={{ x: 1 }}
                        className={styles.portfolioMenu__filter}>
                        <button onClick={() => handleClickFilterBtn("all")} className={activeButton === "all" && styles.activeButton}>All</button>
                        <button onClick={() => handleClickFilterBtn("starter")} className={activeButton === "starter" && styles.activeButton}>Starter</button>
                        <button onClick={() => handleClickFilterBtn("launch")} className={activeButton === "launch" && styles.activeButton}>Launch</button>
                        <button onClick={() => handleClickFilterBtn("dinner")} className={activeButton === "dinner" && styles.activeButton}>Dinner</button>
                        <button onClick={() => handleClickFilterBtn("drinks")} className={activeButton === "drinks" && styles.activeButton}>Drinks</button>
                        <button onClick={() => handleClickFilterBtn("sweets")} className={activeButton === "sweets" && styles.activeButton}>Sweets</button>
                        <button onClick={() => handleClickFilterBtn("fruits")} className={activeButton === "fruits" && styles.activeButton}>Fruits</button>
                    </motion.div>
                    <motion.div 
                      animate={{ x: 0 }}
                      initial={{ x: -100 }}
                      durantion={{ x: 1 }} 
                    className={styles.portfolioMenu__wrapper}>
                        {portfolio.map((menu) => (
                            <div className={styles.portfolioMenu__item} key={menu.id}>
                                <p >{menu.descr}</p>
                                <img src={menu.img} alt="image" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

