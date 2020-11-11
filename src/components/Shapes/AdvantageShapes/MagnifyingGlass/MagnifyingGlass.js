import React from 'react';
import classes from './MagnifyingGlass.module.scss';
import Shape from '../../Shape/Shape';

const MagnifyingGlass = () => {
    const codeString = `
    .MagnifyingGlass {
      font-size: 10em;
      display: inline-block;
      width: 0.4em;
      box-sizing: content-box;
      height: 0.4em;
      border: 0.1em solid $primary-color;
      position: relative;
      border-radius: 0.35em;
      &:before {
        content: "";
        display: inline-block;
        position: absolute;
        right: -0.25em;
        bottom: -0.1em;
        border-width: 0;
        background: $primary-color;
        width: 0.35em;
        height: 0.08em;
        transform: rotate(45deg);
      }
    }`;
    return (
        <Shape title="Magnifying Glass" codeString={codeString}>
            <div className={classes.MagnifyingGlass}>
            </div>
        </Shape>

    );
};

export default MagnifyingGlass;