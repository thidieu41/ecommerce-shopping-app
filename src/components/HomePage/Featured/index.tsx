import Title from "antd/es/typography/Title";
import GeneralTitle from "../../../GeneralComponents/TitleBar";
import { Col, Row, Image, Flex } from "antd";
import FeaterServices from "./FeaterServices";

const Featured = () => {
  return (
    <div className="homepage-content-app">
      <GeneralTitle title="Featured" />
      <Title level={3}>New Arrival</Title>
      <div
        style={{
          marginTop: 30,
        }}
      >
        <Row className="feater-app">
          <Col span={12}>
            <Image src="/assets/images/featured/F1.svg" preview={false} />
          </Col>
          <Col span={12}>
            <Flex
              style={{
                flexDirection: "column",
              }}
            >
              <Image src="/assets/images/featured/F2.svg" preview={false} />
              <Row>
                <Col span={12}>
                  <Image src="/assets/images/featured/F3.svg" preview={false} />
                </Col>
                <Col span={12}>
                  <Image src="/assets/images/featured/F4.svg" preview={false} />
                </Col>
              </Row>
            </Flex>
          </Col>
        </Row>
      </div>

      <FeaterServices />
    </div>
  );
};

export default Featured;
