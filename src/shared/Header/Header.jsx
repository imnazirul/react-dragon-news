import Logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="text-center mt-3 space-y-3">
      <img className="mx-auto" src={Logo} alt="" />
      <p>Journalism Without Fear or Favour</p>

      <p className="text-xl">{moment().format("dddd, MMMM DD, YYYY")}</p>

      <div className="flex">
        <button className="btn btn-secondary text-lg">Breaking News</button>
        <Marquee speed={100} pauseOnHover>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text I can be a React component, multiple React components, or
          just some text
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
