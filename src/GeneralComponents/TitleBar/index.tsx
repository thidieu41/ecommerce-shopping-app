import { Flex, Typography } from "antd";

const { Title } = Typography;
interface IProps {
  title: string;
}

const GeneralTitle = (data: IProps) => {
  return (
    <Flex gap={10} align="center">
      <div
        style={{
          width: "20px",
          height: "40px",
          backgroundColor: "#DB4444",
          borderRadius: 4,
        }}
      ></div>
      <Title
        style={{
          color: "#DB4444",
          margin:0
        }}
        level={5}
      >
        {data.title}
      </Title>
    </Flex>
  );
};

export default GeneralTitle;
