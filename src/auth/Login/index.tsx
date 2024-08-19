import { Col, Row, Image, Flex, Typography, Form, Input, Button } from "antd";
import "../style.css";

const { Title, Link } = Typography;

interface IProps {
  name: string;
  email_phone: string;
  password: string;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 17 },
};

const Login = () => {
  const onFinish = (data: IProps) => {
    console.log(data, "data");
  };

  return (
    <>
      <Row
        style={{
          marginTop: 50,
          marginBottom:50
        }}
      >
        <Col span={14}>
          <Image
            preview={false}
            src="/assets/images/auth.svg"
            style={{
              maxWidth: "90%",
            }}
          />
        </Col>
        <Col
          span={10}
          style={{
            margin: "auto",
          }}
        >
          <Title level={2}>Log in to Exclusive</Title>
          <Typography>Enter your details below</Typography>
          <Form
            {...layout}
            style={{
              marginTop: "30px",
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
              className="custom-input-style"
            >
              <Input placeholder="Name" variant="borderless" />
            </Form.Item>
            <Form.Item
              name="email_phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your email or phone number!",
                },
              ]}
              className="custom-input-style"
            >
              <Input placeholder="Email or Phone Number" variant="borderless" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              className="custom-input-style"
            >
              <Input
                placeholder="Password"
                variant="borderless"
                type="password"
              />
            </Form.Item>

            <Form.Item className="btn-form-style">
              <Flex align="center" justify="space-between" gap={10}>
                <Button
                  className="buttonSumitStyle"
                  type="primary"
                  htmlType="submit"
                  style={{
                    maxWidth:'35%'
                  }}
                >
                 Login
                </Button>
                <Link className="forgot-pw">Forgot Password ?</Link>
              </Flex>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
