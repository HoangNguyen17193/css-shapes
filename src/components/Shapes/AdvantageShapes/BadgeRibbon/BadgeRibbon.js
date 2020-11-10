import React from 'react';
import classes from './BadgeRibbon.module.scss';
import Shape from '../../Shape/Shape';

const BadgeRibbon = () => {
    const codeString = `
      .BadgeRibbon {
          position: relative;
          background: $primary-color;
          height: 100px;
          width: 100px;
          border-radius: 50px;
          &:before, &:after {
            content: '';
            position: absolute;
            border-bottom: 70px solid $primary-color;
            border-left: 40px solid transparent;
            border-right: 40px solid transparent;
            top: 70px;
            left: -10px;
            transform: rotate(-140deg);
          }
          &:after {
            left: auto;
            right: -10px;
            transform: rotate(140deg);
          }
      }`;
    return (
        <Shape title='Badge Ribbon' codeString={codeString}>
            <div className={classes.BadgeRibbon}>
            </div>
        </Shape>
    );
};

export default BadgeRibbon;