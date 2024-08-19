import { Button, Flex, Typography } from "antd";
import GeneralTitle from "../../../GeneralComponents/TitleBar";
import FlashSaleProduct from "../../../GeneralComponents/Product";

const { Title } = Typography;

const bestSellerList = [
  {
    name: "The north coat",
    sale: 0,
    urlImg: "/assets/images/best_seller/BS1.svg",
    price: 360,
    salePrice: 260,
    star: 5,
    numberOfStar: 65,
  },
  {
    name: "Gucci duffle bag",
    sale: 0,
    urlImg: "/assets/images/best_seller/BS2.svg",
    price: 1160,
    salePrice: 960,
    star: 4.5,
    numberOfStar: 65,
  },
  {
    name: "RGB liquid CPU Cooler",
    sale: 0,
    urlImg: "/assets/images/best_seller/BS3.svg",
    price: 170,
    salePrice: 160,
    star: 4.5,
    numberOfStar: 65,
  },
  {
    name: "Small BookSelf",
    sale: 0,
    urlImg: "/assets/images/best_seller/BS4.svg",
    price: 0,
    salePrice: 360,
    star: 4.5,
    numberOfStar: 65,
  },
];

const BestSeller = () => {
  return (
    <div className="homepage-content-app">
      <GeneralTitle title="This Month" />
      <Flex justify="space-between" align="center">
        <Title level={3}>Best Selling Products</Title>
        <Button type="primary" className="best-seller-view-all-btn">
          View All
        </Button>
      </Flex>
      <Flex
        style={{
          marginTop: 30,
        }}
        gap={12}
      >
        {bestSellerList.map((item, index) => (
          <FlashSaleProduct
            key={index}
            product={item}
          />
        ))}
      </Flex>
    </div>
  );
};

export default BestSeller;
