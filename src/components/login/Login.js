/**
 * @author LiuNing
 * @since 2019-04-05
 * @description 登陆界面
 */
import React, { Component } from 'react';
import { Form, Input, Icon, Checkbox, Row, Col, message, Button } from 'antd';

import './Login.scss';

const FormItem = Form.Item;

class Login extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    /**
     * 提交登录
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.email === "admin" && values.password === "admin"
                    && values.captcha === "AAAA") {
                    message.success("登录成功!");
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="container">
                <div className="mask" />
                <Row className="row-wrapper">
                    <Col span={14}>
                        <div className="intro-container">
                            <div className="content">
                                <div className="title">后台管理系统</div>
                                <p className="description">运营与管控一体化的整合式服务平台</p>
                                <p className="description">一起解构数字世界，碰撞科技创新思想</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className="login-container">
                            <h4 className="login-text">登录</h4>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            required: true, message: '请输入你的账号!'
                                        }]
                                    })(
                                        <Input prefix={<Icon type="user" />} placeholder="账号" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入你的密码!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Row style={{ display: 'flex' }}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{ required: true, message: '请输入验证码!' }],
                                        })(
                                            <Input type="text" placeholder="验证码" />
                                        )}
                                        <div className="login-captcha">
                                            <div>
                                                AAAA
                                            </div>
                                        </div>
                                    </Row>
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>记住账号</Checkbox>
                                    )}
                                </FormItem>
                                <Button htmlType="submit" type="primary">登录</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <div className="footer">
                    <div className="copyright">Copyright © 2017 Ant Design</div>
                </div>
            </div >
        );
    }
}

export default Form.create()(Login);