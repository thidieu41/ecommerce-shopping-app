import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Categories from "./Category";
import Experience from "./Experience";
import Featured from "./Featured";
import FlashSale from "./FlashSale";
import OurProducts from "./OurProducts";
import './style.css'

const HomePage = () => {
  return (
    <div className="home-page-content">
      <Banner />
      <FlashSale/>
      <Categories/>
      <BestSeller/>
      <Experience/>
      <OurProducts/>
      <Featured/>
    </div>
  );
};

export default HomePage;
