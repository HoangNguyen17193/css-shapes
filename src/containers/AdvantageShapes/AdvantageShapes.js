import React from 'react';
import {Row, Col} from 'antd';

import Hamburger from '../../components/Shapes/AdvantageShapes/Hamburger/Hamburger';
import Clock from '../../components/Shapes/AdvantageShapes/Clock/Clock';
import CoffeeCup from '../../components/Shapes/AdvantageShapes/CoffeeCup/CoffeeCup';

const AdvantageShapes = () => {
    return (
        <Row>
            <Col span={24} lg={{span: 16, offset: 4}}><Hamburger/></Col>
            <Col span={24} lg={{span: 16, offset: 4}}><Clock/></Col>
            <Col span={24} lg={{span: 12, offset: 6}}><CoffeeCup/></Col>
        </Row>
    );
};

export default AdvantageShapes;