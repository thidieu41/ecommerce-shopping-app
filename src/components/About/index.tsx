import { Col, Flex, Row, Image, Card, Carousel } from "antd";
import Title from "antd/es/typography/Title";
import Typography from "antd/es/typography/Typography";
import "./style.css";
import FeaterServices from "../HomePage/Featured/FeaterServices";

const dataService = [
  {
    url: "/assets/images/about/S1.svg",
    total: "10.5k ",
    content: "Sallers active our site",
  },
  {
    url: "/assets/images/about/S2.svg",
    total: "33k",
    content: "Mopnthly Produduct Sale",
  },
  {
    url: "/assets/images/about/S3.svg",
    total: "45.5k",
    content: "Customer active in our site",
  },
  {
    url: "/assets/images/about/S4.svg",
    total: "25k",
    content: "Anual gross sale in our site",
  },
];

const leaderList = [
  {
    url: "/assets/images/about/L1.svg",
    name: "Tom Cruise",
    position: "Founder & Chairman",
  },
  {
    url: "/assets/images/about/L2.svg",
    name: "Emma Watson",
    position: "Managing Director",
  },
  {
    url: "/assets/images/about/L3.svg",
    name: "Will Smith",
    position: "Product Designer",
  },
];

const listSocial = [
  "/assets/images/about/Icon-Twitter.svg",
  "/assets/images/about/Icon-Linkedin.svg",
  "/assets/images/about/icon-instagram.svg",
];

const carouselSetting = {
  arrows: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
};

const About = () => {
  return (
    <div className="content-page-app">
      <Title level={5}>About</Title>

      <Row>
        <Col span={12} className="about-title-box">
          <Typography className="about-tile">Our Story</Typography>
          <Flex gap={20} className="about-page-content">
            <Typography>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </Typography>
            <Typography>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </Typography>
          </Flex>
        </Col>
        <Col span={12} className="banner-box">
          <Image src="/assets/images/about/barner.svg" preview={false} />
        </Col>
      </Row>
      <Flex justify="space-between" align="center" className="service-box">
        {dataService.map((service, index) => (
          <Flex key={index} className="service-box-item">
            <Image src={service.url} preview={false} />
            <Title level={2}>{service.total}</Title>
            <Typography>{service.content}</Typography>
          </Flex>
        ))}
      </Flex>
      <div className="leader-box">
        <Carousel {...carouselSetting} className="carousel-leader">
          {leaderList.map((leader, index) => (
            <Flex key={index} className="carousel-leader-item">
              <Image src={leader.url} preview={false} />
              <Title level={4}>{leader.name}</Title>
              <Typography>{leader.position}</Typography>
              <Flex align="center" gap={5} style={{
                marginTop:4
              }}>
                {listSocial.map((url) => (
                  <Image
                    src={url}
                    preview={false}
                    style={{
                      width: "18px",
                    }}
                  />
                ))}
              </Flex>
            </Flex>
          ))}
        </Carousel>
      </div>
      <FeaterServices/>
    </div>
  );
};

export default About;
