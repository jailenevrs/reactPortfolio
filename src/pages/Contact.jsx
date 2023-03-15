import React, { useState } from "react";
import CreateIcon from '@mui/icons-material/Create';
import "../styles/contact.css"
import { Cat } from 'react-kawaii'

function Contact(){
    const [showImage, setShowImage] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const handleButtonClick = (event) => {
        event.preventDefault();
        setShowImage(true);
        setShowForm(false);
    }
    return (
        <div className= "contactForm">  
            {showForm &&
                <>
                    <h1> Contact Me</h1>
                    <form>
                        <input placeholder="Name" type="text" />
                        <br></br>
                        <input placeholder ="email" type= "text" />
                        <br></br>
                        <textarea className="message" placeholder="message" type="text" />
                        <br></br>
                        <button onClick={handleButtonClick} className="Submit"> Submit </button>
                    </form>
                </>
            }
            {showImage &&<> <Cat size={320} mood="excited" color="#596881"  />
            <div>"Thank you for your message! I shall contact you as soon as I can"</div> </>} 
        </div>
    );
}

export default Contact;
