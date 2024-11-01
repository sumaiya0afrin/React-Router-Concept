import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Header></Header>

      <div className="section-height">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
