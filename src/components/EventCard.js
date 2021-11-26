import React from "react";
import classes from "./EventCard.module.css";

const EventCard = (props) => {
    return (
        <div className={classes.main}>
            {props.children}
        </div>
    );
    }

export default EventCard;