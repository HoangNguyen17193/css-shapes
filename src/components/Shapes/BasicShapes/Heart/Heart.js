import React from 'react';
import classes from './Heart.module.scss';
import Shape from '../../Shape/Shape';

const Heart = () => {
    const codeString =`
    .Heart {
      position: relative;
      width: 120px;
      height: 100px;

      &::before,
      &:after {
        position: absolute;
        content: '';
        left: 60px;
        top: 0;
        width: 60px;
        height: 90px;
        background: $primary-color;
        border-radius: 60px 60px 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
      }

      &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
      }
    }`;
    return (
        <Shape title="Heart" codeString={codeString}>
            <div className={classes.Heart}>
            </div>
        </Shape>

    );

};

export default Heart;