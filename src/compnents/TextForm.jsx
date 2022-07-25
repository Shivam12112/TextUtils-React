import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  let textSummary = document.getElementById("myBox");

  const handleTexttoUpperCase = () => {
    setText(text.toUpperCase());
    console.log(textSummary.value);
  };

  const handleTexttoLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    textSummary.select();

    /* For mobile devices */
    // textSummary.setSelectionRange(0, 99999);

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(textSummary.value);
    // alert("Text Copied");
  };
  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    // console.log(newText);
    setText(newText.join(" "));
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
              placeholder='Enter Text Here...'
              value={text}
              rows='7'
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className='d-flex'>
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleTexttoUpperCase}
            >
              <i className='fa-solid fa-angles-up'></i> UpperCase
            </button>
            <button
              type='button'
              className='btn btn-primary ms-2'
              onClick={handleTexttoLowerCase}
            >
              <i className='fa-solid fa-angles-down'></i> LowerCase
            </button>
            <button
              type='button'
              className='btn btn-primary ms-2'
              onClick={handleClearText}
            >
              <i className='fa-solid fa-eraser'></i> Clear Text
            </button>
            <button
              type='button'
              className='btn btn-primary ms-2'
              onClick={handleCopy}
            >
              <i className='fa-solid fa-copy'></i> Copy Text
            </button>
            <button
              type='button'
              className='btn btn-primary ms-2'
              onClick={handleRemoveExtraSpaces}
            >
              <i class='fa-solid fa-hand-scissors'></i> RemoveExtraSpaces
            </button>
          </div>
        </form>
      </div>
      <div className='container my-3'>
        <p className='h2'>Text Summary </p>

        <p className='h4'>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
