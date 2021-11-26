import React, { Fragment } from "react";
import classes from "./Event.module.css";
import AccessButton from "./AccessButton";
import fglogo from '../assets/fglogo.png'
import tgfamlogo from '../assets/famtgimage.jpg'

const Event = (props) => {
  return (
    <Fragment>
      <div className={classes.mainframe}>
        <div className={classes.imagemain}>
          <img className={classes.img} src={props.image}alt="" />
        </div>
        <div className={classes.info}>
          <h2>{props.title}</h2>
          <p>
            {props.text}
          </p>
          <AccessButton link={props.url} text={'Access Content'}/>
        </div>
      </div>
    </Fragment>
  );
};

export default Event;
