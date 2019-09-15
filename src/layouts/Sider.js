import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import './Sider.scss';

const SubMenu = Menu.SubMenu;

class Sider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            operationMenu: [], //运营管理菜单
            accessMenu: [], //接入管理菜单
            serviceMenu: [], //服务管理菜单
            systemMenu: [], //系统管理菜单

            selectedKey: '/home', //选择的路径
            openKeys: ['sub1'], //打开的路径（选择的上一层）
        };
        this.onOpenChange = this.onOpenChange.bind(this);
    }
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

    componentWillMount() {
        
    }

    /**
     * 退出登录
     */
    logout = () => {
       
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    handleClick = (e) => {
        this.setState({
            selectedKey: e.key
        });
        this.props.history.push(e.key);
    }

    /**
     * style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}
     * 实现固定侧边栏，但是在收缩侧边栏时有问题
     * 所以要根据collapse的值选择不同的margin-left
     */
    render() {
        const { operationMenu, accessMenu, serviceMenu, systemMenu } = this.state;
        return (
            <Layout.Sider trigger={null}
                style={{
                    overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                }}
            >
                <div className="logo" />
                <Menu onClick={this.handleClick.bind(this)}
                    selectedKeys={[this.state.selectedKey]}
                    defaultOpenKeys={['sub1']}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="/home">
                        <Icon type="home" /><span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="/portal/personal">
                        <Icon type="setting" /><span>个人中心</span>
                    </Menu.Item>
                    <SubMenu key="sub1"
                        title={<span><Icon type="appstore" /><span>运营管理</span></span>}
                    >
                        {operationMenu.map(item => {
                            return (
                                <Menu.Item key={item.path}>
                                    {item.name}
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                    <SubMenu key="sub2"
                        title={<span><Icon type="area-chart" /><span>接入管理</span></span>}
                    >
                        {accessMenu.map(item => {
                            return (
                                <Menu.Item key={item.path} >
                                    {item.name}
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                    <SubMenu key="sub3"
                        title={<span><Icon type="api" /><span>服务管理</span></span>}
                    >
                        {serviceMenu.map(item => {
                            return (
                                <Menu.Item key={item.path} >
                                    {item.name}
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                    <SubMenu key="sub4"
                        title={<span><Icon type="folder" /><span>系统管理</span></span>}
                    >
                        {systemMenu.map(item => {
                            return (
                                <Menu.Item key={item.path} >
                                    {item.name}
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                    <Menu.Item onClick={this.logout}>
                        <Icon type="logout" /><span>退出</span>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }
}

export default withRouter(Sider);
