import React from 'react';
import classes from './Base.module.scss';
import Shape from '../../Shape/Shape';

const Base = () => {
    const codeString = `
    .Base {
      background: $primary-color;
      display: inline-block;
      height: 55px;
      margin-left: 20px;
      margin-top: 30px;
      position: relative;
      width: 100px;
    
      &:before {
        border-bottom: 35px solid $primary-color;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        content: "";
        height: 0;
        left: 0;
        position: absolute;
        top: -35px;
        width: 0;
      }
    }`;
    return (
        <Shape title='Base' codeString={codeString}>
            <div className={classes.Base}>
            </div>
        </Shape>
    );
};

export default Base;