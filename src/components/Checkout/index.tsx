import Title from "antd/es/typography/Title";
import "./style.css";
import {
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Typography,
  Image,
  Divider,
  Radio,
  Button,
} from "antd";

const inputFields = [
  {
    label: "First Name",
    name: "fname",
    messError: "Please enter your first name",
  },
  {
    label: "Company Name",
    name: "company_name",
    messError: "Please enter your company name",
  },
  {
    label: "Street Address",
    name: "street_address",
    messError: "Please enter your street address",
  },
  {
    label: "Apartment, floor, etc. (optional)",
    name: "optional",
    messError: "Please enter your Apartment, floor, etc. (optional)",
  },
  {
    label: "Town/City",
    name: "town",
    messError: "Please enter your Town/City",
  },
  {
    label: "Phone Number",
    name: "phone_number",
    messError: "Please enter your phone number",
  },
  {
    label: "Email Address",
    name: "email",
    messError: "Please enter your email adress",
  },
];

const productList = [
  {
    key: "1",
    product: {
      url: "/assets/images/products/PR1.svg",
      name: "LCD Monitor",
    },
    price: "650",
    quantity: "1",
    subtotal: 650,
  },
  {
    key: "1",
    product: {
      url: "/assets/images/products/PR3.svg",
      name: "RGB liquid CPU Cooler",
    },
    price: "550",
    quantity: "2",
    subtotal: 1100,
  },
];

const dataTotal = [
  {
    title: "Subtotal:",
    total: "$1750",
  },
  {
    title: "Shipping:",
    total: "Free",
  },
  {
    title: "Total:",
    total: "$1750",
  },
];

const formLayout = {
  wrapperCol: { span: 18 },
};
const CheckoOut = () => {
  return (
    <div className="content-page-app">
      <Title level={5}>Check Out</Title>
      <Row className="checlout-content">
        <Col span={12}>
          <Typography className="title-text">Billing Details</Typography>
          <Form layout="vertical" {...formLayout}>
            {inputFields.map((input, index) => (
              <Form.Item
                className="checkout-input-custom"
                key={index}
                name={input.name}
                label={input.label}
                rules={[{ required: true, message: input.messError }]}
              >
                <Input variant="borderless" />
              </Form.Item>
            ))}
            <Form.Item name="disabled" valuePropName="checked">
              <Checkbox>
                Save this information for faster check-out next time
              </Checkbox>
            </Form.Item>
          </Form>
        </Col>

        <Col
          span={12}
          style={{
            margin: "auto",
          }}
        >
          <Flex className="checlout-product">
            {productList.map((item) => (
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={10}>
                  <Image
                    preview={false}
                    src={item.product.url}
                    className="checkout-image"
                  />
                  <Typography>{item.product.name}</Typography>
                </Flex>
                <Typography>$ {item.price}</Typography>
              </Flex>
            ))}
            {dataTotal.map((data, index) => (
              <div key={index}>
                <Flex justify="space-between" align="center">
                  <Typography>{data.title}</Typography>
                  <Typography>{data.total}</Typography>
                </Flex>
                {dataTotal.length !== index + 1 && (
                  <Divider className="divider-cart-total" />
                )}
              </div>
            ))}
            <Radio.Group>
              <Flex className="radio-order">
                <Flex justify="space-between" align="center">
                  <Radio value="apple"> Bank </Radio>
                  <Flex gap={10} align="center">
                    {new Array(4).fill(0).map((item, index) => (
                      <Image
                        preview={false}
                        src={`/assets/images/bank/B${index + 1}.svg`}
                        className="bank-image"
                      />
                    ))}
                  </Flex>
                </Flex>

                <Radio value="pear"> Cash on delivery </Radio>
              </Flex>
            </Radio.Group>
            <Flex align="center" gap={10} className="mt-20">
              <Input
                placeholder="Coupon Code"
                className="coupon-custom-input"
              />
              <Button type="primary">Apply Coupon</Button>
            </Flex>
            <Button type="primary" className="mt-20 place-order-btn">
              Place Order
            </Button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoOut;
