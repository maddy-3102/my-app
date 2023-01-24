import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to UpperCase..","success");
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase..","success");

    }

    const copyText = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied..","success");
    }

    const clearWhiteSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert("Extra spaces removed..","success");
    }
    
    const clearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared..","success");

    }

    const handleOnChandge = (event)=>{
        setText(event.target.value);
     }

    let [text,setText] = useState('');

  return (
      <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">

        <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} placeholder='Enter your text here..' value = {text} onChange={handleOnChandge} id="myBox" rows="7"></textarea>
      </div>

      <button className="btn btn-primary m-1 bg-info" onClick={handleUpClick}>Convert to Uppercase</button>

      <button className="btn btn-primary m-1 bg-secondary" onClick={handleLoClick}>Convert to Lowercase</button>

      <button className="btn btn-primary m-1 bg-warning" onClick={clearWhiteSpaces}>Remove Extra-Spaces</button>
      
      <button className="btn btn-primary m-1 bg-danger" onClick={clearClick}>Clear</button>

      <button className="btn btn-primary m-1 bg-primary" onClick={copyText}>Copy text</button>

    </div>
       
    
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary..</h2>
        <p>{text.split(/[ ]+/).length-1} words and {text.length} characters.</p>
    </div>
    </>
  )
}
