/**
 * @author LiuNing
 * @since 2019-04-05
 * @description 登陆界面
 */
import React, { Component } from 'react';
import { Form, Input, Icon, message, Button } from 'antd';

import './login.scss';
import LoginPNG from '../../images/Login.svg';

const FormItem = Form.Item;

class Login extends Component {

    /**
     * 提交登录
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                if (values.username === "admin" && values.password === "admin") {
                    this.props.history.push('/dashboard');
                    message.success("登录成功!");
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="container">
                <div className="login-container">
                    <div className="login-text">
                        <img alt="logo" width={48} height={48} src={LoginPNG} />
                        <span>Ant Design Admin</span>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem hasFeedback>
                            {getFieldDecorator('username', {
                                rules: [{
                                    required: true, message: '请输入你的账号!'
                                }]
                            })(
                                <Input prefix={<Icon type="user" />} placeholder="账号" />
                            )}
                        </FormItem>
                        <FormItem hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入你的密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <Button style={{ width: '100%' }} htmlType="submit" type="primary">登录</Button>
                    </Form>
                </div>
                <div className="footer">
                    <div className="copyright">Ant Design Admin © 2019 LiuNing</div>
                </div>
            </div >
        );
    }
}

export default Form.create()(Login);