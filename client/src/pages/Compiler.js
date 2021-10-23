import img2 from "../assets/img-2.png";
import "./Compiler.css";
import { useRef } from "react";
import axios from "axios";
const Compiler = () => {
  const coderef = useRef();
  const outputref = useRef();
  const clickhandler = () => {
    console.log(coderef.current.value);
    let x = coderef.current.value.split("\n");
    console.log(x);
    const res = coderef.current.value;
    console.log(res);
    axios
      .post("http://localhost:3001/api/output", {
        code: res,
        language: "c",
      })
      .then((response) => {
        console.log(response.data);
        outputref.current.value = response.data.output;
      });
  };
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
          {/* <select >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> */}
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
