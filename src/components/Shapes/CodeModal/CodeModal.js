import React, {Component} from 'react';
import {Modal} from 'antd';

import HighLightCode from "../../Common/HighlightCode/HighLightCode";

class CodeModal extends Component {
    state = {
        visible: false
    };

    showModal = () => {
        this.setState({
            visible: true
        })
    };


    handleCancel = (e) => {
        e.stopPropagation();
        this.setState({
            visible: false
        })
    };

    render() {
        return (
            <>
                <Modal
                    title={this.props.title}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    width={800}
                >
                    <HighLightCode codeString={this.props.codeString}/>
                </Modal>
            </>
        );
    }
};

export default CodeModal;