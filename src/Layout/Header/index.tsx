import {
  CloseCircleOutlined,
  ContainerOutlined,
  HeartOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Dropdown,
  Flex,
  Input,
  Menu,
  Row,
  Typography,
} from "antd";
import "../style.css";
import { useNavigate } from "react-router-dom";

const { Title, Link } = Typography;

const menuList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Sign Up",
    url: "/register",
  },
];

interface IMenuProps {
  name: string;
  icon: any;
  path: string;
}

const subMenu = [
  {
    name: "Manage My Account",
    icon: <UserDeleteOutlined />,
    path: "",
  },
  {
    name: "My Order",
    icon: <ContainerOutlined />,
    path: "",
  },
  {
    name: "My Cancellations",
    icon: <CloseCircleOutlined />,
    path: "",
  },
  {
    name: "My Reviews",
    icon: <StarOutlined />,
    path: "",
  },
  {
    name: "Logout",
    icon: <LogoutOutlined />,
    path: "",
  },
];

const onNavigateMenu = (menuItem: IMenuProps) => {
  if (menuItem.name === "Logout") {
    localStorage.clear();
  }
  window.location.href = menuItem.path;
};

const menu = (
  <Menu>
    {subMenu.map((item, key) => (
      <Menu.Item
        key={key}
        icon={item.icon}
        style={{
          margin: "5px 0px",
        }}
        onClick={() => onNavigateMenu(item)}
      >
        {item.name}
      </Menu.Item>
    ))}
  </Menu>
);

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    navigate(url);
  };
  return (
    <div>
      <div className="header-title-app">
        <Typography className="header-text-title">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Typography>
        <Link className="header-text-title header-link-shop">Shop Now</Link>
      </div>
      <div className="header-menu-bar">
        <Row
          style={{
            alignItems: "center",
          }}
        >
          <Col span={6}>
            <Link href="/" className="header-title-link">
              Exclusive
            </Link>
          </Col>
          <Col span={10}>
            <Flex align="center" justify="center" gap={40}>
              {menuList.map((menu, index) => (
                <Link key={index} href={menu.url} className="header-menu-link">
                  {menu.title}
                </Link>
              ))}
            </Flex>
          </Col>
          <Col span={8} className="header-bar-user-profile">
            <Input
              placeholder="What are you looking for?"
              suffix={<SearchOutlined />}
              className="search-input-style-custom"
              variant="borderless"
            />
            <Button
              icon={<HeartOutlined />}
              size="large"
              type="text"
              onClick={() => handleNavigate("/wishlist")}
              className="header-btn-custom"
            />
            <Button
              icon={<ShoppingCartOutlined />}
              size="large"
              type="text"
              onClick={() => handleNavigate("/cart")}
              className="header-btn-custom"
            />
            <Dropdown overlay={menu}>
              <Button
                type="primary"
                shape="circle"
                icon={<UserOutlined />}
                size="large"
                className="header-btn-custom"
              />
            </Dropdown>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
