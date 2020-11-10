import React, {Component} from 'react';
import classes from "./Shape.module.scss";
import CodeModal from '../CodeModal/CodeModal';

class Shape extends Component {
    handleClick = () => {
        if(this._codeModal) {
            this._codeModal.showModal()
        }
    };

    setCodeModal = (modal) => {
        this._codeModal = modal
    };

    render() {
        return (
            <div className={classes.ShapeWrapper} onClick={this.handleClick}>
                <h2>{this.props.title}</h2>
                {this.props.children}
                <CodeModal ref={this.setCodeModal} codeString={this.props.codeString} title={this.props.title}/>
            </div>
        );
    }
};

export default Shape;