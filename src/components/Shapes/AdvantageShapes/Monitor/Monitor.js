import React from 'react';
import classes from './Monitor.module.scss';
import Shape from '../../Shape/Shape';

const Monitor = () => {
    const codeString = `
      <div className={classes.MonitorContainer}>
            <div className={classes.Monitor}>
                <div className={classes.Screen}>
                    <div className={classes.Element}>
                        CSS is awesome!
                    </div>
                </div>
                <div className={classes.Stand}>
                    <div className={classes.Base}></div>
                </div>
            </div>
        </div>

.MonitorContainer {
  width: 350px;
  height: 200px;
}

.Monitor {
  position: relative;
  margin: auto;
  width: 250px;
  height: 160px;
  background-color: #444;
  border-radius: 10px;
  border: none;
}

.Screen {
  position: absolute;
  top: 9px; left: 10px;
  width: 230px;
  height: 140px;
  background-color: #EEE;
  border-radius: 10px;
  border: 1px solid #999;
}

.Stand {
  position: absolute;
  top: 160px; left: 110px;
  width: 30px;
  height: 20px;
  background-color: #444;
}

.Base {
  position: absolute;
  top: 20px; left: -20px;
  width: 70px;
  height: 10px;
  background-color: #444;
  border-radius: 2px;
}

.Element {
  position: absolute;
  top:20px; left: 15px;
  width: 180px;
}
`;
    return (
        <Shape title='Monitor' codeString={codeString}>
            <div className={classes.MonitorContainer}>
                <div className={classes.Monitor}>
                    <div className={classes.Screen}>
                        <div className={classes.Element}>
                            CSS is awesome!
                        </div>
                    </div>
                    <div className={classes.Stand}>
                        <div className={classes.Base}></div>
                    </div>
                </div>
            </div>
        </Shape>
    );
};

export default Monitor;