/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-09 17:16:14
 * @LastEditTime: 2021-11-11 14:43:53
 */
import { FC } from "react";
import { Form, Input, Button } from "antd";
import "./index.less";
import { useAppDispatch } from "@/store";
import { loginAsync } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";
const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    await dispatch(
      loginAsync({
        username: "admin",
        password: "123456",
        logintype: "1",
      })
    );
    navigate({ pathname: "/overview" });
  };

  return (
    <div className="loginContainer">
      <Form
        className="loginForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="用户名" name="username">
          <Input placeholder="admin" />
        </Form.Item>

        <Form.Item label="密码" name="password">
          <Input.Password placeholder="123456" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
