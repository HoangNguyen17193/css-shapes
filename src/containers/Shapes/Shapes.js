import React from 'react';
import {Row, Col} from 'antd';

import CurvedArrow from '../../components/Shapes/BasicShapes/CurvedArrow/CurvedArrow';
import PointerArrow from '../../components/Shapes/BasicShapes/PointerArrow/PointerArrow';
import Infinity from '../../components/Shapes/BasicShapes/Infinity/Infinity';
import Leaf from '../../components/Shapes/BasicShapes/Leaf/Leaf';
import Flag from '../../components/Shapes/BasicShapes/Flag/Flag';
import Heart from '../../components/Shapes/BasicShapes/Heart/Heart';
import PacMan from '../../components/Shapes/BasicShapes/PacMan/PacMan';
import Egg from '../../components/Shapes/BasicShapes/Egg/Egg';
import Cross from '../../components/Shapes/BasicShapes/Cross/Cross';
import Facebook from '../../components/Shapes/BasicShapes/Facebook/Facebook';
import YinYang from '../../components/Shapes/BasicShapes/YinYang/YinYang';
import Moon from '../../components/Shapes/BasicShapes/Moon/Moon';
import StarFive from '../../components/Shapes/BasicShapes/StarFive/StarFive';
import BadgeRibbon from '../../components/Shapes/BasicShapes/BadgeRibbon/BadgeRibbon';
import TVScreen from '../../components/Shapes/BasicShapes/TVScreen/TVScreen';
import Diamond from '../../components/Shapes/BasicShapes/Diamon/Diamond';
import MagnifyingGlass from '../../components/Shapes/BasicShapes/MagnifyingGlass/MagnifyingGlass';
import Base from '../../components/Shapes/BasicShapes/Base/Base';
import Pentagon from '../../components/Shapes/BasicShapes/Pentagon/Pentagon';
import Hexagon from '../../components/Shapes/BasicShapes/Hexagon/Hexagon';
import Octagon from '../../components/Shapes/BasicShapes/Octagon/Octagon';

import classes from './Shapes.module.scss';

const Shapes = () => {

    return (
        <div className={classes.Shapes}>
            <Row>
                <Col className={classes.Column} span={24} lg={{span: 8}}><CurvedArrow/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><PointerArrow/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Infinity/></Col>

                <Col className={classes.Column} span={24} lg={{span: 8}}><TVScreen/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Flag/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Cross/></Col>

                <Col className={classes.Column} span={24} lg={{span: 8}}><PacMan/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Egg/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><YinYang/></Col>

                <Col className={classes.Column} span={24} lg={{span: 8}}><Leaf/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Heart/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Moon/></Col>

                <Col className={classes.Column} span={24} lg={{span: 8}}><Diamond/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><MagnifyingGlass/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Base/></Col>

                <Col className={classes.Column} span={24} lg={{span: 8}}><Pentagon/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Hexagon/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><Octagon/></Col>

                <Col className={classes.Column} span={24} lg={{span: 8}}><Facebook/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><StarFive/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><BadgeRibbon/></Col>

            </Row>
        </div>
    );
};

export default Shapes;