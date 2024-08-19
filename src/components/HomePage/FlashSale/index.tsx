import { Button, Carousel, Divider, Flex, Typography } from "antd";
import GeneralTitle from "../../../GeneralComponents/TitleBar";
import FlashSaleProduct from "../../../GeneralComponents/Product";

const { Title } = Typography;

const flashSaleProduct = [
  {
    name: "HAVIT HV-G92 Gamepad",
    sale: 40,
    urlImg: "/assets/images/products/PR1.svg",
    price: 160,
    salePrice: 120,
    star: 5,
    numberOfStar: 88,
  },
  {
    name: "AK-900 Wired Keyboard",
    sale: 35,
    urlImg: "/assets/images/products/PR2.svg",
    price: 1160,
    salePrice: 960,
    star: 4,
    numberOfStar: 75,
  },
  {
    name: "IPS LCD Gaming Monitor",
    sale: 30,
    urlImg: "/assets/images/products/PR3.svg",
    price: 400,
    salePrice: 370,
    star: 5,
    numberOfStar: 99,
  },
  {
    name: "S-Series Comfort Chair",
    sale: 25,
    urlImg: "/assets/images/products/PR4.svg",
    price: 400,
    salePrice: 375,
    star: 4.5,
    numberOfStar: 99,
  }
];

const carouselSetting = {
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite:true
};

const FlashSale = () => {
  return (
    <div className="homepage-content-app flash-sale-app">
      <GeneralTitle title="Today's" />
      <Flex align="center" gap={30}>
        <Title level={3}>Flash Sales</Title>
        <Title level={3}> 03 : 23 : 19 : 56</Title>
      </Flex>
      <div style={{
        marginTop:30
      }}>
        <Carousel {...carouselSetting}>
          {flashSaleProduct.map((item, index) => (
            <FlashSaleProduct
              key={index}
              product={item}
            />
          ))}
        </Carousel>
      </div>
      <div className="flash-sale-all-products">
        <Button type="primary">View All Products</Button>
      </div>
      <Divider/>
    </div>
  );
};

export default FlashSale;
