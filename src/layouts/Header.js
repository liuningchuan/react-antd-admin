/**
 * @author LiuNing
 * @date 2019-09-15
 * @description 网页头部
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Layout, Icon, Badge } from 'antd';

import './Header.scss';

const SubMenu = Menu.SubMenu;

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
        });
    };

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    componentWillMount() {
        this.setState({
            user: localStorage.getItem('user_name')
        });
    }

    /**
     * 退出登录
     */
    logout = () => {

    }

    render() {
        return (
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                <Icon className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                />
                <Menu mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                >
                    <Menu.Item key="schedule">
                        <Badge count={3} overflowCount={99} style={{ height: '15px', lineHeight: '15px' }}>
                            <Icon type="schedule" style={{ fontSize: 16, color: '#1DA57A' }} />
                        </Badge>
                    </Menu.Item>
                    <SubMenu title={<span>
                        <Icon type="user" style={{ fontSize: 18, color: '#1DA57A' }} />{this.state.user}
                    </span>}
                    >
                        <Menu.Item key="logout" style={{ textAlign: 'center' }} className="logout">
                            <span onClick={this.logout}>退出登录</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout.Header>
        );
    }
}
export default withRouter(Header);
