import React from 'react';
import classes from './Infinity.module.scss';
import Shape from '../../Shape/Shape';

const Infinity = () => {
    const codeString = `
    .Infinity {
      position: relative;
      width: 106px;
      height: 50px;
      box-sizing: content-box;
    
      &::before,
      &::after {
        content: '';
        box-sizing: content-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border: 10px solid $primary-color;
        border-radius: 50px 50px 0 50px;
        transform: rotate(-45deg);
      }
    
      &::after {
        left: auto;
        right: 0;
        border-radius: 50px 50px 50px 0;
        transform: rotate(45deg);
      }
    }`;
    return (
        <Shape title='Infinity' codeString={codeString}>
            <div className={classes.Infinity}>
            </div>
        </Shape>
    );
};

export default Infinity;