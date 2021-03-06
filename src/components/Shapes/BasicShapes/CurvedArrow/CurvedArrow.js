import React from 'react';
import classes from './CurvedArrow.module.scss';
import Shape from '../../Shape/Shape';

const CurvedArrow = () => {
    const codeString = `
    .CurvedArrow {
        margin-left: 30px;
        position: relative;
        width: 0;
        height: 0;
        border-top: 45px solid transparent;
        border-right: 45px solid $primary-color;
        transform: rotate(10deg);
        &:after {
            content: "";
            position: absolute;
            border: 0 solid transparent;
            border-top: 15px solid $primary-color;
            border-radius: 100px 0 0 0;
            top: -55px;
            left: -40px;
            width: 60px;
            height: 60px;
            transform: rotate(45deg);
        }
    }`;
    return (
        <Shape title='Curved Arrow' codeString={codeString}>
            <div className={classes.CurvedArrow}>
            </div>
        </Shape>
    );
};

export default CurvedArrow;