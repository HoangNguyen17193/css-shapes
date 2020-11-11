import React from 'react';
import classes from './Facebook.module.scss';
import Shape from '../../Shape/Shape';

const Facebook = () => {
    const codeString = `
    .Facebook {
      background: $primary-color;
      text-indent: -999em;
      width: 100px;
      height: 110px;
      box-sizing: content-box;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      border: 15px solid $primary-color;
      border-bottom: 0;
      &:before {
        content: "/20";
        position: absolute;
        background: $primary-color;
        width: 40px;
        height: 90px;
        bottom: -30px;
        right: -37px;
        border: 20px solid #ffffff;
        border-radius: 25px;
        box-sizing: content-box;
      }
      &:after {
        content: "/20";
        position: absolute;
        width: 55px;
        top: 50px;
        height: 20px;
        background: #ffffff;
        right: 5px;
        box-sizing: content-box;
      }
    }`;
    return (
        <Shape title='Facebook Icon' codeString={codeString}>
            <div className={classes.Facebook}>
            </div>
        </Shape>
    );
};

export default Facebook;