import Title from "antd/es/typography/Title";
import GeneralTitle from "../../../GeneralComponents/TitleBar";
import { Card, Typography, Image, Divider } from "antd";

interface IProps {
  urlImg: string;
  name: string;
}
const categoryList = [
  {
    urlImg: "/assets/images/categories/CT1.svg",
    name: "Phones",
  },
  {
    urlImg: "/assets/images/categories/CT2.svg",
    name: "Computers",
  },
  {
    urlImg: "/assets/images/categories/CT3.svg",
    name: "SmartWatch",
  },
  {
    urlImg: "/assets/images/categories/CT4.svg",
    name: "Camera",
  },
  {
    urlImg: "/assets/images/categories/CT5.svg",
    name: "HeadPhones",
  },
  {
    urlImg: "/assets/images/categories/CT6.svg",
    name: "Gaming",
  },
];

const CategoryComp = (data: IProps) => {
  return (
    <Card className="category-card">
      <Image src={data.urlImg} preview={false} />
      <Typography>{data.name}</Typography>
    </Card>
  );
};

const Categories = () => {
  return (
    <div className="homepage-content-app">
      <GeneralTitle title="Categories" />
      <Title level={3}>Browse By Category</Title>
      <div className="categories-list">
        {categoryList.map((item, index) => (
          <CategoryComp key={index} urlImg={item.urlImg} name={item.name} />
        ))}
      </div>
      <Divider
        style={{
          marginTop: "70px",
        }}
      />
    </div>
  );
};

export default Categories;
