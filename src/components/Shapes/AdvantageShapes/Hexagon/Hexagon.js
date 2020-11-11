import React from 'react';
import classes from './Hexagon.module.scss';
import Shape from '../../Shape/Shape';

const Hexagon = () => {
    const codeString = `
    .Hexagon {
      width: 100px;
      height: 55px;
      background: $primary-color;
      position: relative;
      margin-top: 20px;
      &:before {
        content: '';
        position: absolute;
        top: -25px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 25px solid $primary-color;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -25px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 25px solid $primary-color;
      }
    }`;
    return (
        <Shape title="Hexagon" codeString={codeString}>
            <div className={classes.Hexagon}>
            </div>
        </Shape>

    );
};

export default Hexagon;