/*usestate is a hook.Hooks are a new addition in React 16.8. They let you use state 
and other React features without writing a class.*/
import React, {useState} from 'react'


export default function Textform(props) {

 // this function is used to write in textbox
 const textChange = (event) =>{
  setText(event.target.value)
}

  const [text, setText] = useState('');
   
 
  //function for convert uppercase
  const upperClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text converted in upper case","success");
  }
  //function for convert lowercase
  const lowerClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text converted in lower case","success");
  }

  //function for clear the text box
  const clearClick = () =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text is deleted","success");
  }
  //function for remove extra space of the text box
  const removeSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove space from text","success");
  }
 
  return (
    <>
<div className="mb-3">
   <h1>{props.heading}</h1> 
  <textarea className="form-control" style={{backgroundColor: props.mode === "light"?"white":"#042743" , color: props.mode === "light"?"#042743":"white"}}  value={text} id="mybox" onChange={textChange} rows="8"></textarea>
    <div className="change-btn row">
    <div className="col-lg-8 col-sm-12">
        <button className="mt-3 btn btn-primary mx-1 my-1" onClick = {upperClick} >Convert Uppercase</button>
       <button className="mt-3 btn btn-primary mx-1 my-1" onClick={lowerClick} >Convert Lowercase</button>
       <button className="mt-3 btn btn-primary mx-1 my-1" onClick={clearClick} >Clear Text</button>
       <button className="mt-3 btn btn-primary mx-1 my-1" onClick={removeSpace} >Remove Extra Space</button>
       </div>
       <div className="word-set col-lg-4 col-sm-12"><h6 className="mt-3">({text.split(" ").filter((element)=>{return element.length!=0}).length}) <b> Words</b> , ({text.length}) <b> Characters</b> </h6></div>
    </div>
</div>
    </>
  )
}

