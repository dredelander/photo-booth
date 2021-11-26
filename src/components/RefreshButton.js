import classes from './AccessButton.module.css';
import React from 'react';

const RefreshButton = (props) => {

 const{onClick, text} = props; 

    return (
        <div className={classes.main}>
            <button onClick= {onClick}
            className={classes.button}>{text}</button>
        </div>
        
    );
}

export default RefreshButton;