import { Fragment } from 'react';
import classes from './Header.module.css'
import React from 'react';
import logoHeader from '../assets/logopic.png';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <Fragment>
            <div className={classes.header}>
                <div className={classes.logo}>
                <img className={classes.img} src={logoHeader} alt='teahub.io' />
                </div>
                <NavLink to='/'><h1>Lander's Photo Booth</h1>
                </NavLink>
            </div>
        </Fragment>
    )
};

export default Header;