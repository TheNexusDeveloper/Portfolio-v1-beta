import React from 'react'
import Resume from '../Resume.pdf'
import profile from '../images/profile.JPG'

function Showcase() {
  return (
    <div class="showcase">
        <div className="container">
                    {/* <div className="showcase-text">
                        <h2>Hey there 🫡, My name is </h2>
                        <h1>KOSY OKEKE</h1>
                        <h1>Software Developer </h1>
                        <p>
                            A software Developer with major focus on Front-End Web development, Backend development, 
                            network design and infrastructure, cloud computing and DevOps Engineering.
                        </p>
        
                        <a href={Resume} target="_blank" rel='noreferrer'>Get My Resume </a>
                    </div> */}
            <div className='profile'>
                <img src={profile} alt='profile' width="200px" />

                <h2>Hello, I'm Kosy </h2>
            </div>
            
            <div className='showcase-text'>
                
                <p>
                    An aspiring software Developer with major focus on frontend and Backend development. 
                </p>
            </div>
        </div>
                

    </div>
  )
}

export default Showcase