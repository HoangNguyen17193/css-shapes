import React from 'react';
import classes from './CoffeeCup.module.scss';
import Shape from '../../Shape/Shape';

const CoffeeCup = () => {
    const codeString = `
    <div className={classes.CupContainer}>
        <div className={classes.Cup}></div>
        <div className={classes.Logo}></div>
    </div>

$cup: #F5F5F5;
$green: #29A57C;

.CupContainer {
  position: relative;
  width: 150px;
  height: 250px;
  margin-top: 50px;
}

.Cup {
  position: absolute;
  width: 150px;
  border-top: 250px solid $cup;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  &:before,
  &:after {
    position: absolute;
    content: '';
    background: $cup;
  }
  &:before {
    width: 170px;
    height: 30px;
    top: -280px;
    left: -35px;
    border-radius: 3px;
    box-shadow: 0 2px 0 rgba(#DEDBD2, 0.5);
  }
  &:after {
    width: 140px;
    height: 20px;
    top: -300px;
    left: -20px;
    border-radius: 2px;
  }
}

.Logo {
  margin-left: 45px;
  margin-top: 40px;
  position: absolute;
  &:before,
  &:after {
    position: absolute;
    content: '';
  }
  &:before {
    width: 140px;
    left: -40px;
    top: 20px;
    border-top: 90px solid #B28D67;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  &:after {
    top: 35px;
    width: 60px;
    height: 60px;
    background: #29A57C;
    border-radius: 100%;
  }
}
`;
    return (
        <Shape title='Coffee Cup' codeString={codeString}>
            <div className={classes.CupContainer}>
                <div className={classes.Cup}></div>
                <div className={classes.Logo}></div>
            </div>
        </Shape>
    );
};

export default CoffeeCup;