import React from 'react';
import classes from './Moon.module.scss';
import Shape from '../../Shape/Shape';

const Moon = () => {
    const codeString = `.Moon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 15px 15px 0 0 $primary-color;
    }`;
    return (
        <Shape title='Moon' codeString={codeString}>
            <div className={classes.Moon}>
            </div>
        </Shape>
    );
}

export default Moon;