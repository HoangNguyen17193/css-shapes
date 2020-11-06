import React, {Component} from 'react'
import {Layout} from 'antd';
import {HeartFilled} from '@ant-design/icons'
import 'antd/dist/antd.css';
import classes from './MainLayout.module.scss';

const {Header, Content, Footer} = Layout;

class MainLayout extends Component {
    render() {
        return (
            <Layout className={classes.MainLayout}>
                <Header className={classes.Header}>Quick Todo</Header>
                <Content className={classes.ContentWrapper}>
                    <div className={classes.Content}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer className={classes.Footer}>Created by <b>Hoang Nguyen</b> with <HeartFilled className={classes.HeartIcon}/></Footer>
            </Layout>
        )
    }
}

export default MainLayout;
