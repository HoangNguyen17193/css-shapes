import React from 'react';
import classes from './Leaf.module.scss';
import Shape from '../../Shape/Shape';

const Leaf = () => {
    const codeString = `
    .Leaf {
      width: 100px;
      height: 100px;
      border: 5px solid $primary-color;
      border-radius: 0 100%;
    }`;
    return (
        <Shape title="Leaf" codeString={codeString}>
            <div className={classes.Leaf}>
            </div>
        </Shape>

    );
};

export default Leaf;