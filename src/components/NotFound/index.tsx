import { Button, Flex, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/");
  };
  return (
    <div className="content-page-app">
      <Title level={5}>404 Error</Title>
      <Flex
        align="center"
        justify="center"
        style={{
          flexDirection: "column",
          //   gap: 30,
          minHeight: 360,
        }}
      >
        <Typography
          style={{
            fontSize: 110,
          }}
        >
          404 Not Found
        </Typography>
        <Typography>
          Your visited page not found. You may go home page.
        </Typography>
        <Button
          type="primary"
          style={{
            margin: "50px 0px",
          }}
          onClick={onNavigate}
        >
          Back to home page
        </Button>
      </Flex>
    </div>
  );
};

export default NotFound;
