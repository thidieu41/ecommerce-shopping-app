import { Flex, Typography, Image, Row, Col, Button } from "antd";

const { Title } = Typography;

const urlTimeList = [
  "/assets/images/experience/T1.svg",
  "/assets/images/experience/T2.svg",
  "/assets/images/experience/T3.svg",
  "/assets/images/experience/T4.svg",
];

const Experience = () => {
  return (
    <div className="homepage-content-app">
      <div className="experience-content">
        <Row>
          <Col span={11} className="experience-title-content">
            <Typography className="experience-title">Categories</Typography>
            <Typography className="experience-subtitle">
              Enhance Your <br /> Music Experience
            </Typography>
            <Flex className="time-list-box">
              {urlTimeList.map((url, index) => (
                <Image
                  src={url}
                  preview={false}
                  key={index}
                  className="experience-image"
                />
              ))}
            </Flex>
            <Button className="experience-btn" type="primary">
              Buy Now !
            </Button>
          </Col>
          <Col span={13} className="experience-banner-content">
            <Image
              src={"/assets/images/experience/banner.svg"}
              preview={false}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Experience;
