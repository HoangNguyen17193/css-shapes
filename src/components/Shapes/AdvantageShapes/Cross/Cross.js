import React from 'react';
import classes from './Cross.module.scss';
import Shape from '../../Shape/Shape';

const Cross = () => {
    const codeString = `
    .Cross {
      background: $primary-color;
      height: 75px;
      position: relative;
      width: 15px;
      &::after {
        background: $primary-color;
        content: '';
        height: 15px;
        left: -30px;
        position: absolute;
        top: 30px;
        width: 75px;
      }
    }
    `;
    return (
        <Shape title='Cross' codeString={codeString}>
            <div className={classes.Cross}>
            </div>
        </Shape>
    );
};

export default Cross;