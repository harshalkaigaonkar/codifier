import React from "react";
import img1 from "../assets/img-1.png";
import { FiCamera } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";

function PageTwo() {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="text-white text-3xl font-bold	py-8">Uploaded Code</div>
        <div>
          <img src={img1} alt="img-1" />
        </div>
        <div className="flex flex-col  items-center justify-center border box-border rounded-xl bg-white  text-black">
          <div className="bg-secondary flex flex-col justify-center items-center border  h-40 w-52 rounded-2xl m-6">
            {" "}
            <div className="text-6xl py-4 ">
              <FiCamera />
            </div>{" "}
            <div className="">Camera</div>
          </div>
          <div className="bg-secondary flex flex-col justify-center items-center border  h-40 w-52 rounded-2xl m-6">
            {" "}
            <div className="text-6xl py-4">
              <GrGallery />
            </div>{" "}
            <div>Upload file</div>
          </div>
        </div>
        <div className="my-6">
          <button className="text-white bg-btn px-12 py-4 rounded-full filter drop-shadow-2xl text-2xl">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default PageTwo;
