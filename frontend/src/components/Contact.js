import React from 'react'

function Contact() {
  return (
    <div class="section" id="Contact">
                <div class="heading">
                    <h2>Have project in mind?</h2>
                </div>

                <div class="text">
                    <p>
                        Get in touch with me <br/>
                    </p>

                    <p>
                        I'm always open to new opportunities as well as collaborations
                    </p>
                </div>
                <div class="container">
                    

                    <div class="contact-form" >
                        <form action="" method="get">

                            <div class="name">
                                <label for="fname"></label>
                                <input type="text" id="fname_input" name="firstname" placeholder="Your name.."/>
                            </div>
                            
                            <div class="email">
                                <label for="email"></label>
                                <input type="email" id="email_input" name="email" placeholder="E-mail Address..."/>
                            </div>
                            

                            <div class="subject">
                                <label for="subject"></label>
                                <select placeholder="Subject" name="subject" id="subject_input" title="subject" required>
                                  <option disabled hidden selected>Subject</option>
                                  <option>I'd like to start a project</option>
                                  <option>I'd like to ask a question</option>
                                  <option>I'd like to make a proposal</option>
                                </select>
                            </div>

                            <div class="message">
                                <label for="message"></label>
                                <textarea id="message" name="message" placeholder="Write something.."></textarea>
                            </div>
                            
                            <div class="submit">
                                <input type="submit" value="Submit" id="form-button"/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
  )
}

export default Contact