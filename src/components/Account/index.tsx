import type { MenuProps } from "antd";
import { Flex, Menu, Typography } from "antd";
import Title from "antd/es/typography/Title";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "grp",
    label: "Group",
    type: "group",
    children: [
      { key: "13", label: "Option 13" },
      { key: "14", label: "Option 14" },
    ],
  },
];

const Account = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="content-page-app">
      <Flex align="center" justify="space-between">
        <Title level={5}>My Acocunt</Title>
        <Typography>Welcome Theresa!</Typography>
      </Flex>
      
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Account;
