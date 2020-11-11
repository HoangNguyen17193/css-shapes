import React from 'react';
import classes from './PointerArrow.module.scss';
import Shape from '../../Shape/Shape';

const PointerArrow = () => {
    const codeString = `
    .PointerArrow {
      width: 150px;
      height: 50px;
      background: $primary-color;
      position: relative;
    
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 25px solid #ffffff;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
    
      &:before {
        content: '';
        position: absolute;
        right: -25px;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 25px solid $primary-color;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
    }`;
    return (
        <Shape title="Pointer Arrow" codeString={codeString}>
            <div className={classes.PointerArrow}>
            </div>
        </Shape>

    );
};

export default PointerArrow;