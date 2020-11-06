import React from 'react';
import classes from "./Shape.module.scss";

const Shape = (props) => (
    <div className={classes.ShapeWrapper}>
        <h2>{props.title}</h2>
        {props.children}
    </div>
);

export default Shape;