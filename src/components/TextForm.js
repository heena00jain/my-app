import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared","success");
  };
  const handleCopy = () => {
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copiedto clipboard","success");
  }
  const handleExtraSpace =() => {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra space","success");
  }
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}
          value={text}
          onChange={handleOnChange}
          rows="8"
          id="myBox"
        ></textarea>
      </div>
      <button className="btn btn-primary me-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary me-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary me-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary me-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary me-2" onClick={handleExtraSpace}>
        Extra Space
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
            {text.length>0?text:"Enter something in the textbox to preview it here"}
        </p>
    </div>
    </>
    
  );
}
