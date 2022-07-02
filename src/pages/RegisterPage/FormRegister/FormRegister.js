import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
} from "antd";
import { Option } from "antd/lib/mentions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { setUserRegisterActionService } from "../../../redux/actions/userAction";

const FormRegister = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    let onSuccess = () => {
      message.success(
        "Đăng ký thành thành công, đang chuyển đến trang đăng nhập"
      );
      setTimeout(() => {
        history.push("/login");
      }, 1500);
    };
    let onFail = () => {
      // message.warning("Có biến rồi đại vương ơi");
    };
    dispatch(setUserRegisterActionService(values, onSuccess, onFail));
    // userService
    //   .postLogin(values)
    //   .then((res) => {
    //     localStorageService.setUserInfo(res.data.content);
    //     message.success("Dang Nhap Thanh Cong");
    //     // chuyen trang khi login success
    //     setTimeout(() => {
    //       // history.push("/");
    //       window.location.href = "/";
    //     }, 1500);
    //   })
    //   .catch((err) => {
    //     console.log("Error:", err);
    //     message.error(err.response.data.message);
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Login Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="0">+84</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      className="px-5 md:px-20 w-full"
      layout="vertical"
      form={form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        prefix: "+84",
      }}
      scrollToFirstError
    >
      <Form.Item
        label="Họ tên"
        name="hoTen"
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
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="soDt"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        label="Tài khoản"
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
        name="matKhau"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="NhapLaiMatKhau"
        label="Nhập lại mật khẩu"
        dependencies={["matKhau"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("matKhau") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="text-center">
        <NavLink to="/login">
          <a className="mr-5 hover:underline text-secondary">Đăng Nhập</a>
        </NavLink>
        <Button
          className="hover:text-white hover:bg-primary rounded text-primary bg-white px-5 hover:border-primary border-primary"
          htmlType="submit"
        >
          Đăng ký
        </Button>
      </div>
    </Form>
  );
};

export default FormRegister;
