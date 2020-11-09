import React from 'react';
import {Row, Col} from 'antd';

import CurvedArrow from './CurvedArrow/CurvedArrow';
import PointerArrow from './PointerArrow/PointerArrow';
import Infinity from './Infinity/Infinity';
import Leaf from './Leaf/Leaf';
import Flag from './Flag/Flag';
import Heart from './Heart/Heart';
import PacMan from './PacMan/PacMan';
import Egg from './Egg/Egg';
import Cross from './Cross/Cross';
import Facebook from './Facebook/Facebook';
import YinYang from './YinYang/YinYang';
import Moon from './Moon/Moon';
import StarFive from './StarFive/StarFive';
import BadgeRibbon from './BadgeRibbon/BadgeRibbon';
import TVScreen from './TVScreen/TVScreen';

import classes from './AdvantageShapes.module.scss';

const AdvantageShapes = () => (
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
);

export default AdvantageShapes;