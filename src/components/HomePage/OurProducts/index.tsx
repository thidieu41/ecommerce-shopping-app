import { Button, Col, Row } from "antd";
import GeneralTitle from "../../../GeneralComponents/TitleBar";
import Title from "antd/es/typography/Title";
import FlashSaleProduct from "../../../GeneralComponents/Product";

const ourProductList = [
  {
    name: "Breed Dry Dog Food",
    sale: 0,
    urlImg: "/assets/images/our_products/OP1.svg",
    salePrice: 100,
    price: 0,
    star: 3,
    numberOfStar: 35,
    isNew: true,
  },
  {
    name: "CANON EOS DSLR Camera",
    sale: 0,
    urlImg: "/assets/images/our_products/OP2.svg",
    salePrice: 365,
    price: 0,
    star: 4,
    numberOfStar: 95,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    sale: 0,
    urlImg: "/assets/images/our_products/OP3.svg",
    salePrice: 700,
    price: 0,
    star: 5,
    numberOfStar: 325,
    isNew: true,
  },
  {
    name: "Curology Product Set",
    sale: 0,
    urlImg: "/assets/images/our_products/OP4.svg",
    salePrice: 500,
    price: 0,
    star: 4,
    numberOfStar: 145,
  },
  {
    name: "Kids Electric Car",
    sale: 0,
    urlImg: "/assets/images/our_products/OP5.svg",
    salePrice: 960,
    price: 0,
    star: 5,
    numberOfStar: 65,
    isNew: true,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    sale: 0,
    urlImg: "/assets/images/our_products/OP6.svg",
    salePrice: 1160,
    price: 0,
    star: 5,
    numberOfStar: 35,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    sale: 0,
    urlImg: "/assets/images/our_products/OP7.svg",
    salePrice: 660,
    price: 0,
    star: 4.5,
    numberOfStar: 55,
  },
  {
    name: "Quilted Satin Jacket",
    sale: 0,
    urlImg: "/assets/images/our_products/OP8.svg",
    salePrice: 660,
    price: 0,
    star: 4.5,
    numberOfStar: 55,
    isNew: true,
  },
];
const OurProducts = () => {
  return (
    <div className="homepage-content-app">
      <GeneralTitle title="Our Products" />
      <Title level={3}>Explore Our Products</Title>
      <Row
        style={{
          margin: "30px 0px",
        }}
      >
        {ourProductList.map((item, index) => (
          <Col key={index} span={6}>
            <FlashSaleProduct product={item} />
          </Col>
        ))}
      </Row>
      <div className="flash-sale-all-products">
        <Button type="primary">View All Products</Button>
      </div>
    </div>
  );
};

export default OurProducts;
