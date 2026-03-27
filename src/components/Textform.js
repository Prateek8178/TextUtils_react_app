import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase", "success")
        
    }
    const handleLwClick = () =>{
        
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase", "success")
        
    }
     const handleClearClick = () =>{
    
        let newtext = '';
        setText(newtext)
        props.showAlert("Text cleared", "success")
        
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
        
    }
    const handleCopyClick = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success")
    }
    const handleRSClick = () =>{
        let newText = text.split(/\s+/).join(" ");
        setText(newText)
        props.showAlert("Extra Spaces removed", "success")
    }
    const [text, setText] = useState('');

    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white': '#042743'}}>
      <h1 >{props.heading} </h1>
      <div className="mb-3">
       
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey': 'white', color: props.mode==='dark' ? 'white': '#042743'}} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
       <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
         <button className="btn btn-primary mx-2 my-3" onClick={handleRSClick}>Remove Extra Spaces</button>



    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white': '#042743'}}>
        <h2>Your text Summary</h2>
       <p>
  {text.trim().split(/\s+/).filter((e)=>e.length!==0).length} words and {text.length} characters
</p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h3> Preview </h3>
        <p>{text.length>0?text:"Enter Something in the textbox to preview "}</p>
    </div>
    </>
  )
}
