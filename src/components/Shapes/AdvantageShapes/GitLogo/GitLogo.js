import React from 'react';
import classes from './GitLogo.module.scss';
import Shape from '../../Shape/Shape';

const GitLogo = () => {
    const codeString = `
    <div className={classes.GitLogoWrapper}>
        <div className={classes.GitLogo}>
            <div className={classes.LineOne}></div>
            <div className={classes.LineTwo}></div>
            <div className={classes.CircleOne}></div>
            <div className={classes.CircleTwo}></div>
            <div className={classes.CircleThree}></div>
        </div>
    </div>

@mixin Circle {
  background-color: azure;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

@mixin Line {
  background-color: azure;
  position: absolute;
  height: 16px;
}

.GitLogoWrapper {
  height: 250px;
}

.GitLogo {
  width: 200px;
  height: 200px;
  background-color: #f05030;
  border-radius: 10%;
  transform: rotate(45deg);
  position: relative;
  margin-top: 30px;
  .LineOne {
    @include Line();
    transform: rotate(45deg);
    width: 125px;
    top: 100px;
    left: 45px;
  }

  .LineTwo {
    @include Line();
    width: 130px;
    height: 16px;
    top: 47px;
  }

  .CircleOne {
    @include Circle();
    top: 35px;
    left: 35px;
    position: absolute;
  }

  .CircleTwo {
    @include Circle();
    top: 35px;
    left: 125px;
    position: absolute;
  }

  .CircleThree {
    @include Circle();
    top: 125px;
    left: 125px;
    position: relative;
  }
}
`;
    return (
        <Shape title='Git Logo' codeString={codeString}>
            <div className={classes.GitLogoWrapper}>
                <div className={classes.GitLogo}>
                    <div className={classes.LineOne}></div>
                    <div className={classes.LineTwo}></div>
                    <div className={classes.CircleOne}></div>
                    <div className={classes.CircleTwo}></div>
                    <div className={classes.CircleThree}></div>
                </div>
            </div>
        </Shape>
    );
};

export default GitLogo;