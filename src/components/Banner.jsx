import ReactImages1 from "../assets/img-1.jpg";
import ReactImages2 from "../assets/img-2.jpg";
import ReactImages3 from "../assets/img-3.jpg";
import ReactImages4 from "../assets/img-4.jpg";
import ReactImages5 from "../assets/img-5.jpg";
const Banner = () => {
  return (
    <div className="grid">
      <img src={ReactImages1} alt="" />
      <img src={ReactImages2} alt="" />
      <img src={ReactImages3} alt="" />
      <img src={ReactImages4} alt="" />
      <img src={ReactImages5} alt="" />
    </div>
  );
};

export default Banner;
