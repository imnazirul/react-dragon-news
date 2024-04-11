import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import NewsCard from "../shared/NewsCard/NewsCard";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 border">
          {news.map((aNews, idx) => (
            <NewsCard key={idx} news={aNews}></NewsCard>
          ))}
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
