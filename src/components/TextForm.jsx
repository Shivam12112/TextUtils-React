import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  let textSummary = document.getElementById("myBox");

  const handleTexttoUpperCase = () => {
    setText(text.toUpperCase());
    console.log(textSummary.value);
    props.showAlert("Converted to UpperCase..", "success");
  };

  const handleTexttoLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase..", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Clered..", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    textSummary.select();

    /* For mobile devices */
    textSummary.setSelectionRange(0, 99999);

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(textSummary.value);
    // alert("Text Copied");
    props.showAlert("Text Copied..", "success");
  };
  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    // console.log(newText);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed..", "success");
  };

  const reverseCase = () => {
    let newText = text.split("");
    let newArr = [];
    //return newText;
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] === newText[i].toLowerCase()) {
        newArr.push(newText[i].toUpperCase());
      } else if (newText[i] === newText[i].toUpperCase()) {
        newArr.push(newText[i].toLowerCase());
      }
    }
    setText(newArr.join(""));
    props.showAlert("case reversed..", "success");
  };

  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <form>
          <h1>{props.heading}</h1>
          <div className='form-group my-3'>
            <textarea
              className='form-control'
              id='myBox'
              placeholder='Enter Text Here...'
              value={text}
              rows='8'
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#010614" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
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
              <i className='fa-solid fa-hand-scissors'></i> RemoveExtraSpaces
            </button>
            <button
              type='button'
              className='btn btn-primary ms-2'
              onClick={reverseCase}
            >
              <i className='fa-solid fa-rotate'></i> Reverse Case
            </button>
          </div>
        </form>
        <p className='h2 mt-2'>Text Summary </p>
        <p className='h4'>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p className='h5'>
          {(
            0.008 *
            60 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          ).toFixed(2)}{" "}
          Seconds to Read.
        </p>
      </div>
    </>
  );
}
