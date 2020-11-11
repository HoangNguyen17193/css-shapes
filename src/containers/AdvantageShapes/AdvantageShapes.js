import React from 'react';
import {Row, Col} from 'antd';

import Hamburger from "../../components/Shapes/AdvantageShapes/Hamburger/Hamburger";

const AdvantageShapes = () => {
    return (
        <Row>
            <Col span={24} lg={{span: 16, offset: 4}}><Hamburger/></Col>
        </Row>
    );
};

export default AdvantageShapes;