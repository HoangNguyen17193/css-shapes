import React from 'react';
import classes from './StarFive.module.scss';
import Shape from '../../Shape/Shape';

const StarFive = () => {
    const codeString = `
    .StarFive {
      margin: 40px 0;
      position: relative;
      display: block;
      color: $primary-color;
      width: 0;
      height: 0;
      border-right: 75px solid transparent;
      border-bottom: 56px solid $primary-color;
      border-left: 80px solid transparent;
      transform: rotate(35deg);
    
      &:before {
        border-bottom: 64px solid $primary-color;
        border-left: 24px solid transparent;
        border-right: 24px solid transparent;
        position: absolute;
        height: 0;
        width: 0;
        top: -36px;
        left: -52px;
        display: block;
        content: '';
        transform: rotate(-35deg);
      }
    
      &:after {
        position: absolute;
        display: block;
        color: $primary-color;
        top: 2px;
        left: -84px;
        width: 0;
        height: 0;
        border-right: 80px solid transparent;
        border-bottom: 56px solid $primary-color;
        border-left: 80px solid transparent;
        transform: rotate(-70deg);
        content: '';
      }
    }`;
    return (
        <Shape title='Star (5points)' codeString={codeString}>
            <div className={classes.StarFive}>
            </div>
        </Shape>
    );
};

export default StarFive;