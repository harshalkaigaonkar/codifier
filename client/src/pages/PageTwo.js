import React, { useState } from "react";
import img1 from "../assets/img-1.png";
import { FiCamera } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { useHistory } from "react-router";
import axios from "axios";

function PageTwo(state) {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const history = useHistory();
  const clickHandler = async () => {
    const formdata = new FormData();
    formdata.append('Image', image.raw);
    const res = await axios.post('http://localhost:3001/api/', formdata);
    if (res.data) {
      console.log(res.data)
      state.state.code = res.data.code
      history.push("/compiler");
    }
    else {
      console.log(res.error)
      // need an error here
    }
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
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
              <label htmlFor="upload-button">
                <GrGallery />
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>{" "}
            <div>Upload file</div>
          </div>
        </div>
        <div onClick={clickHandler} className="my-6">
          <button className="text-white bg-btn px-12 py-4 rounded-full filter drop-shadow-2xl text-2xl">
            {`<  > Convert`}
          </button>
        </div>
      </div>
    </>
  );
}

export default PageTwo;
