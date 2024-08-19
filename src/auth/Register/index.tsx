import { Col, Row, Image, Flex, Typography, Form, Input, Button } from "antd";
import'../style.css';

const { Title, Link } = Typography;

interface IProps {
    name:string;
    email_phone:string;
    password:string
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 17 },
};


const RegisterComp = () => {

    const onFinish = (data: IProps) =>{
        console.log(data, 'data');
    }

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
          <Title level={2}>Create an account</Title>
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
              <Button className="buttonSumitStyle" type="primary"  htmlType='submit'>
                Create Account
              </Button>
              <Button className="buttonSumitStyle" style={{
                marginTop:20
              }}>Sign up with Google</Button>
            </Form.Item>
            <Form.Item>
              <Flex align="center" justify="center" gap={10}>
                <Typography
                  style={{
                    color: "#808080",
                  }}
                >
                  Already have account?
                </Typography>
                <Link href="/login">Login</Link>
              </Flex>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default RegisterComp;
