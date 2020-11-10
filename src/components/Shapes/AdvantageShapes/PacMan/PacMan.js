import React from 'react';
import classes from './PacMan.module.scss';
import Shape from '../../Shape/Shape';

const PacMan = () => {
    const codeString = `
    .PacMan {
      width: 0;
      height: 0;
      border-top: 50px solid $primary-color;
      border-right: 50px solid transparent;
      border-bottom: 50px solid $primary-color;
      border-left: 50px solid $primary-color;
      border-radius: 50px;
    }`;
    return (
        <Shape title="Pac Man" codeString={codeString}>
            <div className={classes.PacMan}>
            </div>
        </Shape>

    );
};

export default PacMan;