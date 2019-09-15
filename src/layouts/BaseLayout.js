import React, { Component } from 'react';
import { Layout } from 'antd';

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
        return (
            <Layout>
                <Sider />
                <Layout style={{ marginLeft: 200 }}>
                    <Header toggle={this.toggle} />
                    <Content className="menu-layout">
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
