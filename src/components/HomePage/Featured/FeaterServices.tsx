import { Flex, Typography, Image } from "antd";
import './style.css'

const data = [
  {
    urlImg: "/assets/images/featured/S1.svg",
    title: "FREE AND FAST DELIVERY",
    sub: "Free delivery for all orders over $140",
  },
  {
    urlImg: "/assets/images/featured/S2.svg",
    title: "24/7 CUSTOMER SERVICE",
    sub: "Friendly 24/7 customer support",
  },
  {
    urlImg: "/assets/images/featured/S3.svg",
    title: "MONEY BACK GUARANTEE",
    sub: "We reurn money within 30 days",
  },
];

const FeaterServices = () => {
  return (
    <Flex className="featered-services-app">
      {data.map((item, index) => (
        <Flex
          key={index}
          style={{
            flexDirection: "column",
          }}
          className="featered-services-item"
        >
          <Image src={item.urlImg} preview={false} />
          <Typography className="services-title">{item.title}</Typography>
          <Typography className="services-sub">{item.sub}</Typography>
        </Flex>
      ))}
    </Flex>
  );
};

export default FeaterServices;
