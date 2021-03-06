import React from 'react';
import classes from './Diamond.module.scss';
import Shape from '../../Shape/Shape';

const Diamond = () => {
    const codeString = `
    .Diamond {
      border-style: solid;
      border-color: transparent transparent $primary-color transparent;
      border-width: 0 25px 25px 25px;
      height: 0;
      width: 50px;
      top: -25px;
      box-sizing: content-box;
      position: relative;
      margin: 20px 0 50px 0;
      &:after {
        content: "";
        position: absolute;
        top: 25px;
        left: -25px;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: $primary-color transparent transparent transparent;
        border-width: 70px 50px 0 50px;
      }
    }`;
    return (
        <Shape title='Diamond' codeString={codeString}>
            <div className={classes.Diamond}>
            </div>
        </Shape>
    );
};

export default Diamond;