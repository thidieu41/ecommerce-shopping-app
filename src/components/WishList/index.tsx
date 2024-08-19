import { Button, Col, Flex, Row, Typography } from "antd";
import FlashSaleProduct from "../../GeneralComponents/Product";
import GeneralTitle from "../../GeneralComponents/TitleBar";

const { Title } = Typography;

const wishList = [
  {
    name: "Gucci duffle bag",
    sale: 0,
    urlImg: "/assets/images/best_seller/BS2.svg",
    price: 0,
    salePrice: 960,
    star: 0,
    numberOfStar: 65,
    isWishListDelete: true,
  },
  {
    name: "RGB liquid CPU Cooler",
    sale: 0,
    urlImg: "/assets/images/best_seller/BS3.svg",
    price: 0,
    salePrice: 160,
    star: 0,
    numberOfStar: 65,
    isWishListDelete: true,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    sale: 0,
    urlImg: "/assets/images/our_products/OP7.svg",
    salePrice: 660,
    price: 0,
    star: 0,
    numberOfStar: 55,
    isWishListDelete: true,
  },
  {
    name: "Quilted Satin Jacket",
    sale: 0,
    urlImg: "/assets/images/our_products/OP8.svg",
    salePrice: 660,
    price: 0,
    star: 0,
    numberOfStar: 55,
    isWishListDelete: true,
  },
];

const productForYou = [
  {
    name: "HAVIT HV-G92 Gamepad",
    sale: 40,
    urlImg: "/assets/images/products/PR1.svg",
    price: 160,
    salePrice: 120,
    star: 5,
    numberOfStar: 88,
    isWishListView: true,
  },
  {
    name: "Small BookSelf",
    sale: 0,
    urlImg: "/assets/images/best_seller/BS4.svg",
    price: 0,
    salePrice: 360,
    star: 4.5,
    numberOfStar: 65,
    isWishListView: true,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    sale: 0,
    urlImg: "/assets/images/our_products/OP7.svg",
    salePrice: 660,
    price: 0,
    star: 4.5,
    numberOfStar: 55,
    isWishListView: true,
  },
  {
    name: "CANON EOS DSLR Camera",
    sale: 0,
    urlImg: "/assets/images/our_products/OP2.svg",
    salePrice: 365,
    price: 0,
    star: 4,
    numberOfStar: 95,
    isNew: true,
    isWishListView: true,
  },
];

const WishList = () => {
  return (
    <div className="content-page-app">
      <Flex
        style={{
          flexDirection: "column",
          gap: 50,
          marginBottom: 70,
        }}
      >
        <Flex justify="space-between" align="center">
          <Title level={5}>Wishlist (4)</Title>
          <Button>Move All To Bag</Button>
        </Flex>
        <Row>
          {wishList.map((item, index) => (
            <Col key={index} span={6}>
              <FlashSaleProduct product={item} />
            </Col>
          ))}
        </Row>
        <Flex
          justify="space-between"
          align="center"
          style={{
            marginTop: 50,
          }}
        >
          <GeneralTitle title="Just For You" />
          <Button>See All</Button>
        </Flex>
        <Row>
          {productForYou.map((item, index) => (
            <Col key={index} span={6}>
              <FlashSaleProduct product={item} />
            </Col>
          ))}
        </Row>
      </Flex>
    </div>
  );
};

export default WishList;
