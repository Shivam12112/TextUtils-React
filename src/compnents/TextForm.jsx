import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let textSummary = document.getElementById("textSummary");
  const handleText = () => {
    // setText("Wellcome to TextUtils");
    setText(text.toUpperCase());
    textSummary.innerText = `${text.split(" ").length} Words and ${
      text.length
    } Characters`;
  };
  const handleOnChange = (event) => {
    // console.log(`Handling on change`);
    // console.log(text.toUpperCase());
    setText(event.target.value);
  };

  return (
    <>
      <div className='container my-3'>
        <form>
          <h1>{props.heading}</h1>
          <div className='form-group my-3'>
            <textarea
              className='form-control'
              id='myBox'
              value={text}
              rows='7'
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={handleText}
          >
            Converet to Uppercase
          </button>
        </form>
      </div>
      <div className='container my-3'>
        <p className='h2'>Text Summary </p>

        <p className='h4' id='textSummary'></p>
      </div>
    </>
  );
}
