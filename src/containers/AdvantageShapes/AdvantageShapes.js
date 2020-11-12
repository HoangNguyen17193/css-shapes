import React from 'react';
import {Row, Col} from 'antd';

import Hamburger from '../../components/Shapes/AdvantageShapes/Hamburger/Hamburger';
import Clock from '../../components/Shapes/AdvantageShapes/Clock/Clock';
import CoffeeCup from '../../components/Shapes/AdvantageShapes/CoffeeCup/CoffeeCup';
import CaptainAmericaLogo from '../../components/Shapes/AdvantageShapes/CaptainAmericaLogo/CaptainAmericaLogo';
import Monitor from "../../components/Shapes/AdvantageShapes/Monitor/Monitor";

const AdvantageShapes = () => {
    return (
        <Row>
            <Col span={24} lg={{span: 12, offset: 6}}><Hamburger/></Col>
            <Col span={24} lg={{span: 12, offset: 6}}><Clock/></Col>
            <Col span={24} lg={{span: 12, offset: 6}}><CoffeeCup/></Col>
            <Col span={24} lg={{span: 12, offset: 6}}><CaptainAmericaLogo/></Col>
            <Col span={24} lg={{span: 12, offset: 6}}><Monitor/></Col>
        </Row>
    );
};

export default AdvantageShapes;