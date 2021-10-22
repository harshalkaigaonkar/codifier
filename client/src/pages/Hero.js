import React from "react";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import { useHistory } from "react-router-dom";
function Hero() {
  const history = useHistory();
  const clickhandler = () => {
    history.push("/compiler");
  };
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="text-secondary text-3xl font-bold	py-8">Get Your</div>
        <div>
          <img src={img1} alt="img-1" />
        </div>
        <div className="font-medium	capitalize	">handwritten codes</div>
        <div className="text-secondary text-3xl font-bold	py-8">To</div>

        <div>
          <img src={img2} alt="img-2" />
        </div>
        <div className="font-medium	capitalize	">real code</div>
        <div className="py-8">
          <button
            className="text-white bg-btn px-12 py-4 rounded-full filter drop-shadow-2xl text-2xl "
            onClick={clickhandler}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
