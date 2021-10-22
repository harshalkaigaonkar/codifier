import React from "react";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";

function PageTwo() {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="text-white text-3xl font-bold	py-8">Uploaded Code</div>
        <div>
          <img src={img1} alt="img-1" />
        </div>
        <div className="box-border h-96 w-72 p-4 border-26 rounded-xl border-secondary"></div>
        <div className="py-8">
          <button className="text-white bg-btn px-12 py-4 rounded-full filter drop-shadow-2xl text-2xl">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default PageTwo;
