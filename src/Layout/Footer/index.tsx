import { SendOutlined } from "@ant-design/icons";
import { Col, Flex, Input, Row, Typography, Image } from "antd";
import "../style.css";

const { Title } = Typography;

const menuFooter = [
  {
    title: "Support",
    sub: [
      {
        content: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh",
      },
      {
        content: "exclusive@gmail.com",
      },
      {
        content: "+88015-88888-9999",
      },
    ],
  },
  {
    title: "Account",
    sub: [
      {
        content: "My Account",
      },
      {
        content: "Login / Register",
      },
      {
        content: "Cart",
      },
      {
        content: "Wishlist",
      },
      {
        content: "Shop",
      },
    ],
  },
  {
    title: "Quick Link",
    sub: [
      {
        content: "Privacy Policy",
      },
      {
        content: "Terms Of Use",
      },
      {
        content: "FAQ",
      },
      {
        content: "Contact",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer-app">
      <Flex
        style={{
          justifyContent: "space-between",
          flexWrap: "nowrap",
          color: "white",
        }}
      >
        <div>
          <Title level={4}>Exclusive</Title>
          <Flex className="submenu-content">
            <Typography>Subscribe</Typography>
            <Typography>Get 10% off your first order</Typography>
            <Input
              placeholder="enter your email"
              suffix={<SendOutlined />}
              variant="borderless"
              className="custom-input-footer"
              defaultValue={'example@gmail.com'}
            />
          </Flex>
        </div>
        {menuFooter.map((menu, indexmenu) => (
          <div key={indexmenu}>
            <Title level={5}>Support</Title>
            <Flex className="submenu-content">
              {menu.sub.map((sub, index) => (
                <Typography key={index}>{sub.content}</Typography>
              ))}
            </Flex>
          </div>
        ))}

        <div>
          <Title level={5}>Download App</Title>
          <Flex className="submenu-content">
            <Typography className="download-text">
              Save $3 with App New User Only
            </Typography>
            <Flex justify="space-between" align="center">
              <Image
                preview={false}
                src="/assets/images/app/qrcode.svg"
                style={{
                  maxWidth: "90%",
                }}
              />
              <Flex className="download-app">
                <Image
                  preview={false}
                  src="/assets/images/app/GooglePlay.svg"
                />
                <Image preview={false} src="/assets/images/app/AppStore.svg" />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default Footer;
