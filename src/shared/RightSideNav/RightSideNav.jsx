import GithubButton from "react-github-login-button";
import GoogleButton from "react-google-button";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="p-3">
      <div className="mb-8">
        <p className="text-xl font-semibold mb-3">Login With</p>
        <div className="text-center flex justify-center flex-col items-center gap-3">
          {" "}
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
          <GithubButton
            onClick={() => {
              console.log("Github button clicked");
            }}
          />
        </div>
      </div>

      {/* find us on */}

      <div>
        <p className="text-xl  mb-3">Find Us on</p>
        <div className=" flex flex-col  ">
          <a className="border rounded-t-lg p-3">f Facebook</a>
          <a className="border-x p-3">T Twitter</a>
          <a className="border rounded-b-lg p-3">I Instagram</a>
        </div>
      </div>

      {/* q zone */}
      <div className="p-3 bg-gray-100 mt-8 rounded-xl">
        <p className="text-xl  mb-3">Q-Zone</p>
        <div className=" flex flex-col  ">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
