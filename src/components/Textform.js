import React, {useState} from 'react'

export default function Textform(props) {

  const handleOnChange = (event) =>{
    console.log("On Change")
    setText(event.target.value)
  }

  const handleUpClick = () =>{
    console.log("Upper case has clicked " + text);
    let newText = text.toUpperCase() ;
    setText(newText)
  }

  const handleLoClick = () =>{
    console.log("Lower case has clicked " + text);
    let newText = text.toLowerCase() ;
    setText(newText)
  }

  const handleClearClick = () =>{
    console.log("Clear Text has clicked " + text);
    let newText = "";
    setText(newText)
  }

  const handleCopy = () =>{
    console.log("Copy To Text has clicked " );
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const [text , setText] = useState('enter the name here')
  return (
    <div>
      <div className="container my-3" style={{color : props.mode == 'dark' ? 'white' : 'black'}}>
         <h1 style={{color : props.mode == 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
         <div className="mb-3">
           <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode == 'dark' ? 'gray' : 'white' , color : props.mode == 'dark' ? 'white' : 'black'}}></textarea>
         </div>
         <button type="button" className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
         <button type="button" className="btn btn-primary mx-3" onClick={handleLoClick}>convert to lowerecase</button>
         <button type="button" className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>
         <button type="button" className="btn btn-primary mx-3" onClick={handleCopy}>Copy To Clipboard</button>



      </div>
      
      <div className="container my-4"  style={{color : props.mode == 'dark' ? 'white' : 'black'}}>
        <h1  style={{color : props.mode == 'dark' ? 'white' : 'black'}}>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charactors</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the textbox to preview "}</p>
      </div>
    </div>
  )
}
