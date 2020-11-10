import React from 'react';
import classes from './TVScreen.module.scss';
import Shape from '../../Shape/Shape';

const TVScreen = () => {
    const codeString = `
    .TVScreen {
      position: relative;
      width: 100px;
      height: 75px;
      background: $primary-color;
      border-radius: 50% / 10%;
      color: white;
      text-align: center;
      text-indent: .1em;
      &:before {
        content: '';
        position: absolute;
        top: 10%;
        bottom: 10%;
        right: -5%;
        left: -5%;
        background: inherit;
        border-radius: 5% / 50%;
      }
     }`;
    return (
        <Shape title='TV Screen' codeString={codeString}>
            <div className={classes.TVScreen}>
            </div>
        </Shape>
    );
}

export default TVScreen;