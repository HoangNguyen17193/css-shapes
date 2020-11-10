import React, {Fragment, useState} from 'react';
import {Row, Col} from 'antd';

import CodeModal from '../../components/Shapes/CodeModal/CodeModal';
import CurvedArrow from '../../components/Shapes/AdvantageShapes/CurvedArrow/CurvedArrow';
import PointerArrow from '../../components/Shapes/AdvantageShapes/PointerArrow/PointerArrow';
import Infinity from '../../components/Shapes/AdvantageShapes/Infinity/Infinity';
import Leaf from '../../components/Shapes/AdvantageShapes/Leaf/Leaf';
import Flag from '../../components/Shapes/AdvantageShapes/Flag/Flag';
import Heart from '../../components/Shapes/AdvantageShapes/Heart/Heart';
import PacMan from '../../components/Shapes/AdvantageShapes/PacMan/PacMan';
import Egg from '../../components/Shapes/AdvantageShapes/Egg/Egg';
import Cross from '../../components/Shapes/AdvantageShapes/Cross/Cross';
import Facebook from '../../components/Shapes/AdvantageShapes/Facebook/Facebook';
import YinYang from '../../components/Shapes/AdvantageShapes/YinYang/YinYang';
import Moon from '../../components/Shapes/AdvantageShapes/Moon/Moon';
import StarFive from '../../components/Shapes/AdvantageShapes/StarFive/StarFive';
import BadgeRibbon from '../../components/Shapes/AdvantageShapes/BadgeRibbon/BadgeRibbon';
import TVScreen from '../../components/Shapes/AdvantageShapes/TVScreen/TVScreen';

import classes from './Shapes.scss';

const Shapes = () => {

    return (
        <Fragment>
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

                <Col className={classes.Column} span={24} lg={{span: 8}}><Facebook/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><StarFive/></Col>
                <Col className={classes.Column} span={24} lg={{span: 8}}><BadgeRibbon/></Col>
            </Row>
        </Fragment>
    );
};

export default Shapes;