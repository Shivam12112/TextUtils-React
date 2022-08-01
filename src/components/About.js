import React from "react";
// import { useState } from "react";

export default function About(props) {
  //  = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btnStyle, setBtnStyle] = useState("fa-solid fa-2x fa-moon mx-3");

  // const toggleMode = () => {
  //   color == "white") {
  //     {
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnStyle("fa-solid fa-2x fa-moon mx-3");
  //   } else {
  //     {
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solod white",
  //     });
  //     setBtnStyle("fa-solid fa-2x fa-sun mx-3");
  //   }
  // };
  return (
    <div
      className='container h-100 d-flex justify-content-center'
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <div className='row  row align-items-center'>
        <div className='col-md-6'>
          <h3>
            We provide free tools to help you with your daily tasks. You will
            find tools for formatting source code, converters, tools for
            handling text, such as remove extra spaces, text sorter and many
            others.
          </h3>
        </div>
        <div className='col-md-6'>
          <h3>
            We provide free tools to help you with your daily tasks. You will
            find tools for formatting source code, converters, tools for
            handling text, such as remove extra spaces, text sorter and many
            others.
          </h3>
        </div>
      </div>
    </div>
  );
}
