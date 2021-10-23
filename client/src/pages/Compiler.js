import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Compiler(state) {
  const [lang, setLang] = useState("c");
  const [load, setLoad] = useState(false);
  const codeRef = useRef();
  const outputRef = useRef();
  useEffect(() => {
    codeRef.current.value = state.state.code;
    // eslint-disable-next-line
  }, []);
  const clickHandler = () => {
    console.log(lang);
    const res = codeRef.current.value;
    setLoad(true);
    axios
      .post("http://localhost:3001/api/output", {
        code: res,
        language: lang,
      })
      .then((response) => {
        setLoad(false);
        outputRef.current.value = response.data.output;
      });
  };

  const changeHandler = (e) => {
    setLang(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="text-secondary text-3xl font-bold	py-8">
          Generated Code
        </div>
        <div className="flex flex-col  items-center justify-center border box-border rounded-xl bg-secondary  text-black">
          <select onChange={changeHandler} className="w-20 mt-2  rounded-full">
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="python3">Python</option>
            <option value="java">Java</option>
          </select>

          <textarea
            style={{ height: "17rem" }}
            className="p-4 text-lg outline-none bg-white flex flex-col justify-center items-center border   w-72 rounded-2xl my-1"
            ref={codeRef}
          ></textarea>

          <textarea
            style={{ height: "17rem" }}
            className="p-4 font-bold text-lg outline-none bg-white flex outline-none flex-col justify-center items-center border   w-72 rounded-2xl m-4"
            ref={outputRef}
          ></textarea>
        </div>

        <div onClick={clickHandler} className={`py-4`}>
          <button className="text-white bg-btn px-12 py-4 rounded-full filter drop-shadow-2xl text-2xl">
            {`${load ? "Loading." : "< / > Convert"} `}
          </button>
        </div>
      </div>
    </>
  );
}

export default Compiler;
