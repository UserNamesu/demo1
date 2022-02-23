import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { history } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const { errorFields } = values;
    if (!errorFields) {      
      // 跳转到指定路由
      if (values.username === 'admin' && values.password === 'admin') {
        history.push('/index'); 
      } else {
        history.push('/error'); 
      }
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      username: 'admin',
      password: 'admin',
    });
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.content}>
          <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
