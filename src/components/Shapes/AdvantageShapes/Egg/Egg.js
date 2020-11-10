import React from 'react';
import classes from './Egg.module.scss';
import Shape from '../../Shape/Shape';

const Egg = () => {
    const codeString = `
    .Egg {
      display: block;
      width: 75px;
      height: 100px;
      background-color: $primary-color;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    }`;
    return (
        <Shape title='Egg' codeString={codeString}>
            <div className={classes.Egg}>
            </div>
        </Shape>
    );
};

export default Egg;