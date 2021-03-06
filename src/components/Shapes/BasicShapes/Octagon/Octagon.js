import React from 'react';
import classes from './Octagon.module.scss';
import Shape from '../../Shape/Shape';

const Octagon = () => {
    const codeString = `
    .Octagon {
      width: 100px;
      height: 100px;
      background: $primary-color;
      position: relative;
      &:before {
        content: "";
        width: 100px;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 29px solid $primary-color;
        border-left: 29px solid #ffffff;
        border-right: 29px solid #ffffff;
      }
      &:after {
        content: "";
        width: 100px;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 29px solid $primary-color;
        border-left: 29px solid #ffffff;
        border-right: 29px solid #ffffff;
      }
    }`;
    return (
        <Shape title="Octagon" codeString={codeString}>
            <div className={classes.Octagon}>
            </div>
        </Shape>

    );
};

export default Octagon;