import React, {useState} from 'react'

export default function About() {

    const [btn, setbtn] = useState('Enable Light Mode');    
    const [MyStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
    });
   const ChangeMode = () =>{
    if(MyStyle.color=== 'white'){
        setMyStyle({
            color: 'black',
        backgroundColor: 'white'
        })
        setbtn('Enable Dark Mode')
    }
    else{
        setMyStyle({
            color: 'white',
        backgroundColor: 'black'
        })
        setbtn('Enable Light Mode')
    }
   }


  return (
    <div className='container' style={MyStyle}>
       <div className="col-lg-12 about-head"> <h1>ABOUT US</h1> </div>
      <div className="accordion" id="accordionExample" style={MyStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <p> <strong> Introduction </strong></p>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
      <p> <strong>Welcome to [Text Enhancer]!</strong> <br />  At [Text Enhancer], we offer a convenient and user-friendly platform for enhancing your text and improving its readability. Whether you're a student, professional, or simply someone who wants to polish their writing, our website provides a range of tools to help you achieve your goals.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <p><strong>What We Offer</strong></p> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
      <p> <strong>Text Transformation:</strong> <br/> Easily convert your text between capital letters and small letters with just a click of a button. Whether you need to emphasize certain words or want to make your text more casual, our transformation tools make it simple and efficient.</p>
      <p> <strong>Remove Extra Spaces:</strong> <br/>Say goodbye to cluttered text! Our tool automatically removes extra spaces between words, ensuring that your text looks clean and professional. Whether you're copying text from a document or composing it directly on our website, we'll help you maintain consistency and clarity.</p>
      <p> <strong>Clear Text:</strong> <br/> Sometimes, you just need a fresh start. Our "Clear Text" feature allows you to reset your text field with a single click, making it easy to start over or enter new content without any distractions.</p>
      <p> <strong>Word and Character Count:</strong> <br/> Keep track of your progress with our word and character count feature. Whether you're aiming for a specific word limit or need to ensure your text fits within certain constraints, our tool provides real-time feedback to help you stay on track.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <p><strong>Why Choose Us</strong></p>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        <p> <strong>User-Friendly Interface:</strong> <br/> Our website is designed with simplicity and ease of use in mind. Whether you're a novice or experienced user, you'll find our platform intuitive and straightforward.</p>
        <p> <strong>Convenient Access:</strong> <br/> Access our tools anytime, anywhere, from any device with an internet connection. Whether you're at home, in the office, or on the go, our website is accessible whenever you need it.</p>
        <p> <strong>Free of Charge:</strong> <br/> Enjoy all the features of our website completely free of charge. We believe in making text enhancement tools accessible to everyone, regardless of budget or subscription fees.</p>
        <p> <strong>Privacy and Security: </strong> <br/> Your privacy and security are our top priorities. We adhere to strict data protection protocols to ensure that your information remains safe and confidential at all times.</p>
        <p> <strong>Get Started Today:</strong> <br/> Ready to enhance your text and improve your writing? Visit [Text Enhancer] now and experience the difference for yourself! Whether you're writing an essay, composing an email, or drafting a blog post, our tools are here to support you every step of the way.</p>
      </div>
    </div>
  </div>
</div>
        <div className="dark-btn">
             <button onClick={ChangeMode} type='button' className='btn btn-primary mt-10'>{btn}</button>
        </div>
    </div>
  )
}




