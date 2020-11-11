import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import {Layout, Menu} from 'antd';
import {HeartFilled} from '@ant-design/icons'
import 'antd/dist/antd.css';
import classes from './MainLayout.module.scss';

const {Header, Content, Footer} = Layout;

class MainLayout extends Component {
    render() {
        return (
            <Layout className={classes.MainLayout}>
                <Header className={classes.Header}>
                    <Menu className={classes.HeaderMenu} theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">
                            <NavLink exact to="/">
                                Basic Shapes
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/advantage-shapes">
                                Advantage Shapes
                            </NavLink>
                        </Menu.Item>

                    </Menu>
                </Header>
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
