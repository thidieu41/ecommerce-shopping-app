import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Form, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import Typography from "antd/es/typography/Typography";
import "./style.css";

const { TextArea } = Input;

const inputFields = [
  {
    placeholder: "Your Name",
    name: "name",
    messError: "Please enter your name",
  },
  {
    placeholder: "Your Email",
    name: "email",
    messError: "Please enter your email",
  },
  {
    placeholder: "Your Phone",
    name: "phone",
    messError: "Please enter your phone",
  },
];

const Contact = () => {
  return (
    <div className="homepage-content-app">
      <Title level={5}>Contact</Title>
      <Row className="contact-content">
        <Col span={8} className="infor-contact-box">
          <Flex className="infor-contact-content">
            <Flex align="center" gap={10} className="contact-infor-btn">
              <Button
                shape="circle"
                icon={<PhoneOutlined />}
                className="p-0"
                type="primary"
              />
              <Typography className="contact-infor-btn-text">
                Call To US
              </Typography>
            </Flex>
            <Typography>We are available 24/7, 7 days a week.</Typography>
            <Typography>Phone: +8801611112222</Typography>
            <Divider />

            <Flex align="center" gap={10} className="contact-infor-btn">
              <Button
                shape="circle"
                icon={<MailOutlined />}
                className="p-0"
                type="primary"
              />
              <Typography className="contact-infor-btn-text">Write To US</Typography>
            </Flex>
            <Typography>
              Fill out our form and we will contact you within 24 hours.
            </Typography>
            <Typography>Emails: customer@exclusive.com</Typography>
            <Typography>Emails: support@exclusive.com</Typography>
          </Flex>
        </Col>
        <Col span={15} className="infor-contact-content">
          <Form layout="vertical">
            <Flex className="form-contact-content">
              <Row>
                {inputFields.map((input, index) => (
                  <Col span={8} className="col-contact-input">
                    <Form.Item
                      className="contact-input-custom"
                      key={index}
                      name={input.name}
                      rules={[{ required: true, message: input.messError }]}
                    >
                      <Input
                        variant="borderless"
                        placeholder={input.placeholder}
                      />
                    </Form.Item>
                  </Col>
                ))}
              </Row>
              <Form.Item
                key={"message"}
                name={"message"}
                className="contact-input-custom"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  rows={6}
                  variant="borderless"
                  placeholder="Your Message"
                />
              </Form.Item>

              <Form.Item className="contact-form-custom">
                <Button type="primary" htmlType="submit">Send message</Button>
              </Form.Item>
            </Flex>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
