import { Col, Divider, Flex, Row, Typography, Image, Carousel } from "antd";
import "../style.css";
import { RightOutlined } from "@ant-design/icons";

const menuBanner = [
  {
    title: "Woman’s Fashion",
    isIcon: true,
  },
  {
    title: "Men’s Fashion",
    isIcon: true,
  },
  {
    title: "Electronics",
    isIcon: false,
  },
  {
    title: "Home & Lifestyle",
    isIcon: false,
  },
  {
    title: "Medicine",
    isIcon: false,
  },
  {
    title: "Sports & Outdoor",
    isIcon: false,
  },
  {
    title: "Baby’s & Toys",
    isIcon: false,
  },
  {
    title: "Groceries & Pets",
    isIcon: false,
  },
  {
    title: "Health & Beauty",
    isIcon: false,
  },
];

const carouselList = [
  {
    url: "assets/images/banner/B1.webp",
    title: "",
  },
  {
    url: "assets/images/banner/B4.webp",
    title: "",
  },
  {
    url: "assets/images/banner/B7.jpg",
    title: "",
  },
];

export const Banner = () => {
  return (
    <div>
      <Divider className="divide-banner-header" />
      <div className="homepage-content-app">
        <Row>
          <Col span={5} className="content-baner">
            <Flex className="flex-side-bar-menu">
              {menuBanner.map((menu, index) => (
                <Flex align="center" justify="space-between" key={index}>
                  <Typography>{menu.title}</Typography>
                  {menu.isIcon && <RightOutlined />}
                </Flex>
              ))}
            </Flex>
          </Col>

          <Divider
            type="vertical"
            style={{
              height: "auto",
            }}
          />

          <Col span={18} className="content-baner">
            <Carousel autoplay className="carousel-custom">
              {carouselList.map((item, index) => (
                <Image preview={false} src={item.url} key={index} />
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
