import React from 'react';
import classes from './Pentagon.module.scss';
import Shape from '../../Shape/Shape';

const Pentagon = () => {
    const codeString = `
    .Pentagon {
      position: relative;
      width: 54px;
      box-sizing: content-box;
      border-width: 50px 18px 0;
      border-style: solid;
      border-color: $primary-color transparent;
      margin-top: 30px;
    
      &:before {
        content: '';
        position: absolute;
        height: 0;
        width: 0;
        top: -85px;
        left: -18px;
        border-width: 0 45px 35px;
        border-style: solid;
        border-color: transparent transparent $primary-color;
      }
    }`;
    return (
        <Shape title="Pentagon" codeString={codeString}>
            <div className={classes.Pentagon}>
            </div>
        </Shape>

    );
};

export default Pentagon;