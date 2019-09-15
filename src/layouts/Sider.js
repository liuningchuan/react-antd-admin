import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import './Sider.scss';

const SubMenu = Menu.SubMenu;

class Sider extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
    }

    /**
     * style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}
     * 实现固定侧边栏，但是在收缩侧边栏时有问题
     * 所以要根据collapse的值选择不同的margin-left
     */
    render() {
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
                        <Icon type="home" /><span>Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="/portal/personal">
                        <Icon type="setting" /><span>Users</span>
                    </Menu.Item>
                    <Menu.Item key="/portal/personal3">
                        <Icon type="setting" /><span>Form</span>
                    </Menu.Item>
                    <SubMenu key="sub1"
                        title={<span><Icon type="appstore" /><span>List</span></span>}
                    >
                        <Menu.Item key="item.path1">List</Menu.Item>
                        <Menu.Item key="item.path2">Table</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2"
                        title={<span><Icon type="area-chart" /><span>Charts</span></span>}
                    >
                        <Menu.Item key="item.path3">ECharts</Menu.Item>
                        <Menu.Item key="item.path4">BizCharts</Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout.Sider>
        );
    }
}

export default withRouter(Sider);
