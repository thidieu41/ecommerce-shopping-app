import {
  TableProps,
  Image,
  Table,
  Flex,
  Button,
  Col,
  Row,
  Input,
  Divider,
} from "antd";
import Title from "antd/es/typography/Title";
import "./style.css";
import Typography from "antd/es/typography/Typography";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  product: {
    url: string;
    name: string;
  };
  price: string;
  quantity: string;
  subtotal: number;
  action: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (product) => (
      <div className="product-cart">
        <Image preview={false} src={product.url} className="cart-image" />
        <Typography>{product.name}</Typography>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (data) => <Typography>$ {data}</Typography>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (data) => (
      <Flex gap={20} align="center">
        <Button
          icon={<MinusOutlined />}
          className="p-0"
          shape="circle"
          size="small"
        />
        <Typography>{data}</Typography>
        <Button
          icon={<PlusOutlined />}
          className="p-0"
          shape="circle"
          size="small"
        />
      </Flex>
    ),
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    key: "subtotal",
    render: (data) => <Typography>$ {data}</Typography>,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (data) => (
      <Button className="p-0" shape="circle" icon={<DeleteOutlined />} />
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    product: {
      url: "/assets/images/our_products/OP2.svg",
      name: "LCD Monitor",
    },
    price: "650",
    quantity: "1",
    subtotal: 650,
    action: "",
  },
  {
    key: "1",
    product: {
      url: "assets/images/our_products/OP3.svg",
      name: "H1 Gamepad",
    },
    price: "550",
    quantity: "2",
    subtotal: 1100,
    action: "",
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

const Cart = () => {
  const navigate = useNavigate();

  const onNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <div className="content-page-app">
      <Title level={5}>Cart (4)</Title>
      <Flex className="cart-content-app">
        <Table
          columns={columns}
          dataSource={data}
          style={{
            marginTop: 50,
          }}
        />
        <Flex justify="space-between" align="center">
          <Button>Return To Shop</Button>
          <Button>Update Cart</Button>
        </Flex>
        <Row>
          <Col span={12}>
            <Flex align="center" gap={10} className="cart-coupon-content">
              <Input
                placeholder="Coupon Code"
                className="coupon-custom-input"
              />
              <Button type="primary">Apply Coupon</Button>
            </Flex>
          </Col>
          <Col span={12}>
            <Flex className="cart-total-content">
              <Typography className="cart-total-title">Cart Total</Typography>
              {dataTotal.map((data, index) => (
                <div key={index}>
                  <Flex justify="space-between" align="center">
                    <Typography>{data.title}</Typography>
                    <Typography>{data.total}</Typography>
                  </Flex>
                  <Divider className="divider-cart-total" />
                </div>
              ))}
              <Button type="primary" className="cart-total-checkout-btn" onClick={()=> onNavigate('/checkout')}>
                Procees to checkout
              </Button>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default Cart;
