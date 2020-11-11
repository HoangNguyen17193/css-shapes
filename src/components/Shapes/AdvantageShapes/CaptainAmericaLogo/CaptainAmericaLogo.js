import React from 'react';
import classes from './CaptainAmericaLogo.module.scss';
import Shape from '../../Shape/Shape';

const CaptainAmericaLogo = () => {
    const codeString = `
    <div className={classes.Clock}>
        <div className={classes.Captain}>
            <div className={classes.Star}>
            </div>
        </div>
    </div>

$red: #CA252A;
$blue: #0572B9;

.Captain {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: radial-gradient($blue 0%, $blue 35%, $red 0%, $red 50%, white 0%, white 60%, $red 0%, $red 90%);
  margin: 100px auto auto auto;
}

.Star {
  position: absolute;
  top: 110px;
  left: 53px;
  display: block;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid white;
  border-left: 100px solid transparent;
  -moz-transform: rotate(35deg);
  -webkit-transform: rotate(35deg);
  -ms-transform: rotate(35deg);
  -o-transform: rotate(35deg);
  transform: rotate(35deg) scale(0.67);

  &:before {
    border-bottom: 80px solid white;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    -webkit-transform: rotate(-35deg);
    -moz-transform: rotate(-35deg);
    -ms-transform: rotate(-35deg);
    -o-transform: rotate(-35deg);
  }

  &:after {
    position: absolute;
    content: '';
    display: block;
    color: $red;
    top: 3px;
    left: -105px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid white;
    border-left: 100px solid transparent;
    -webkit-transform: rotate(-70deg);
    -moz-transform: rotate(-70deg);
    -ms-transform: rotate(-70deg);
    -o-transform: rotate(-70deg);
  }
}
`;
    return (
        <Shape title='Captain America Logo' codeString={codeString}>
            <div className={classes.CaptainContainer}>
                <div className={classes.Captain}>
                    <div className={classes.Star}>
                    </div>
                </div>
            </div>
        </Shape>
    );
};

export default CaptainAmericaLogo;