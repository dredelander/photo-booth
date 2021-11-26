import React from "react";
import classes from "./Images.module.css";

const Image = (props) => {
   
    return(
        <>
        
            <div className={classes.img}>
                <img className={classes.singleimg} src={props.source} alt='' />
                    
            </div>
        
        </>
    )
    }
export default Image;