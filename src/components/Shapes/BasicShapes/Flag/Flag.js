import React from 'react';
import classes from './Flag.module.scss';
import Shape from '../../Shape/Shape';

const Flag = () => {
    const codeString = `
    .Flag {
      width: 110px;
      height: 56px;
      box-sizing: content-box;
      padding-top: 15px;
      position: relative;
      background: $primary-color;
      color: #ffffff;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-align: center;
      text-transform: uppercase;
    
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 13px solid #ffffff;
        border-left: 55px solid transparent;
        border-right: 55px solid transparent;
      }
    }`;
    return (
        <Shape title='Flag'codeString={codeString}>
            <div className={classes.Flag}>
            </div>
        </Shape>
    );
};

export default Flag;