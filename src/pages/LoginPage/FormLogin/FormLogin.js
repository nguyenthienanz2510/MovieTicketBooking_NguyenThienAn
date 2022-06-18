import React from "react";
import { Button, Form, Input, message } from "antd";
import { userService } from "../../../services/userService";
import { localStorageService } from "../../../services/localStorageService";
import { useHistory } from "react-router-dom";

export default function FormLogin() {
  // xet thanh dieu huong URL
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    userService
      .postLogin(values)
      .then((res) => {
        localStorageService.setUserInfo(res.data.content);
        message.success("Dang Nhap Thanh Cong");
        // chuyen trang khi login success
        setTimeout(() => {
          // history.push("/");
          window.location.href = "/";
        }, 1500);
      })
      .catch((err) => {
        console.log("Error:", err);
        message.error(err.response.data.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <div className="text-center">
        <Button className=" bg-blue-500 text-white rounded" htmlType="submit">
          Login
        </Button>
      </div>
    </Form>
  );
}
