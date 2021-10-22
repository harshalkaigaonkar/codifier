import img2 from "../assets/img-2.png";
import "./Compiler.css";
import { useRef } from "react";
const Compiler = () => {
  const coderef = useRef();
  const outputref = useRef();
  const clickhandler = () => {};
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="text-secondary text-3xl font-bold	py-8">
          Generated code
        </div>
        <div>
          <img src={img2} alt="img-1" />
        </div>
        <div className="container">
          <textarea className="code" ref={coderef}></textarea>

          <textarea className="output" ref={outputref}></textarea>
        </div>
        <button onClick={clickhandler} className="cmplbtn">
          Compile
        </button>
      </div>
    </>
  );
};

export default Compiler;
