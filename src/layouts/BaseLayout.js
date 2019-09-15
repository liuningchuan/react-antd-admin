import React, { Component } from 'react';
import { Layout, Breadcrumb, Icon } from 'antd';

import Header from './Header';
import Sider from './Sider';

import './BaseLayout.scss';

const { Content, Footer } = Layout;

class BaseLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false, //菜单是否收缩
        };
    }

    /**
     * 切换菜单是否收缩
     */
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const { collapsed } = this.state;
        return (
            <Layout>
                <Sider />
                <Layout style={{ marginLeft: 200 }}>
                    <Header toggle={this.toggle} />
                    <Content className="menu-layout">
                        {/* <Breadcrumb style={{ marginBottom: '16px' }}>
                            <Breadcrumb.Item href="">
                                首页
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                运营管理
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                产品订阅审核
                            </Breadcrumb.Item>
                        </Breadcrumb> */}
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
                        Copyright © 2017 LiuNing
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BaseLayout;
