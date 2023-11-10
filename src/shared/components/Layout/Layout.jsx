import React from 'react';
import styles from "./Layout.module.css"
import { Footer, Header } from '../../../components';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
};
