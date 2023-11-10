import React from 'react';
import { useLocation } from 'react-router';
import styles from "./BreadCrumbs.module.scss"
import { Link } from 'react-router-dom';

export const BreadCrumbs = () => {
    const location = useLocation()

    let currentLink = ''
    const crumbs =  location.pathname.split("/")
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink =+ `/${crumb}`
        return (
            <div className={styles.crumb} key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })

    console.log(location)
    return (
        <div>
            {crumbs}
        </div>
    );
};

