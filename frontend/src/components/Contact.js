import {React, useState } from 'react'

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!name && !email && !message){
            alert("All Fields on the contact for are required.")
        } else {
            setName("")
            setEmail("")
            setMessage("")
            alert("Thank You for reaching out, would get back to you soon.")
            console.log("Submitted");
        }
        
    };

  return (
    <div className="section" id="Contact">
                <div className="heading">
                    <h2>Have project in mind?</h2>
                </div>

                <div className="text">
                    <p>
                        Get in touch with me <br/>
                    </p>

                    <p>
                        I'm always open to new opportunities as well as collaborations
                    </p>
                </div>
                <div className="container">
                    

                    <div className="contact-form" >
                        <form onSubmit={handleSubmit}>

                            <div className="name">
                                <label htmlFor="fname"></label>
                                <input type="text" 
                                id="fname_input" 
                                name="firstname" 
                                placeholder="Your name.."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            
                            <div className="email">
                                <label htmlFor="email"></label>
                                <input 
                                    type="email" 
                                    id="email_input" 
                                    name="email" 
                                    placeholder="E-mail Address..." 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            

                            <div className="subject">
                                <label htmlFor="subject"></label>
                                <select placeholder="Subject" name="subject" id="subject_input" title="subject" required>
                                  <option disabled hidden selected>Subject</option>
                                  <option>I'd like to start a project</option>
                                  <option>I'd like to ask a question</option>
                                  <option>I'd like to make a proposal</option>
                                </select>
                            </div>

                            <div className="message">
                                <label htmlFor="message"></label>
                                <textarea id="message" value={message} placeholder="Write something.." onChange={e => setMessage(e.target.value)} />
                            </div>
                            
                            <div className="submit">
                                <button type="submit" id="form-button">Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
  )
}

export default Contact