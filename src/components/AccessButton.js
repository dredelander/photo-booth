import classes from './AccessButton.module.css';
import React from 'react';
import {Route} from 'react-router-dom';

const AccessButton = (props) => {

 const{link, text} = props; 

    return (
        <Route render={({history}) => (
        <div className={classes.main}>
            <button onClick= {()=>{
                history.push(link)}
            } className={classes.button}>{text}</button>
        </div>
        )}/>
    );
}

export default AccessButton;