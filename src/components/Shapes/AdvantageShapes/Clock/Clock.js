import React from 'react';
import classes from './Clock.module.scss';
import Shape from '../../Shape/Shape';

const Clock = () => {
    const codeString = `
    <div className={classes.Clock}>
        <div className={classes.ClockContent}>
            <span className={classes.Hour}></span>
            <span className={classes.Minute}></span>
            <span className={classes.Second}></span>
            <span className={classes.Dot}></span>
        </div>
    </div>

.Clock {
  border-radius: 100%;
  background: $primary-color;
  border: 5px solid white;
  box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
}

.ClockContent {
  overflow: hidden;
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 100%;
  .Minute,
  .Hour {
    position: absolute;
    height: 100px;
    width: 6px;
    margin: auto;
    top: -27%;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .Minute {
    position: absolute;
    height: 130px;
    width: 4px;
    top: -38%;
    left: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    transform: rotate(90deg);
  }

  .Second {
    position: absolute;
    height: 90px;
    width: 2px;
    margin: auto;
    top: -26%;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    background: #FF4B3E;
    transform-origin: bottom center;
    transform: rotate(180deg);
    z-index: 1;
  }

  .Dot {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: white;
    border: 2px solid #1b1b1b;
    margin: auto;
    z-index: 1;
  }
}
`;
    return (
        <Shape title='Clock' codeString={codeString}>
            <div className={classes.Clock}>
                <div className={classes.ClockContent}>
                    <span className={classes.Hour}></span>
                    <span className={classes.Minute}></span>
                    <span className={classes.Second}></span>
                    <span className={classes.Dot}></span>
                </div>
            </div>
        </Shape>
    );
};

export default Clock;