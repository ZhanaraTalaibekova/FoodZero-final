import React from 'react';
import styles from "./Contact.module.scss";

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <section className={styles.contactMain__section}>
                <div className="container">
                    <div className={styles.contactMain__wrapper}>
                        <h3 className={styles.contactMain__title}>Get in Touch</h3>
                        <p className={styles.contactMain__subtitle}>The freshest ingredients for you every day</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

