import React from 'react';

import classes from './Spinner.module.scss';

const Spinner = () => (
    <div className={classes.Backdrop}>
        <div className={classes.Spinner}>Loading...</div>
    </div>
);

export default Spinner;