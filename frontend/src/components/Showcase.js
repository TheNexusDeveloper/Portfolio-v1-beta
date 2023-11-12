import React from 'react'
import Resume from '../Resume.pdf'

function Showcase() {
  return (
    <div class="showcase">
                <div className="container">
                    <div className="showcase-text">
                        <h2>Hey there 🫡, My name is </h2>
                        <h1>KOSY OKEKE</h1>
                        <h1>Software Developer </h1>
                        <p>
                            A software Developer with major focus on Front-End Web development, Backend development, 
                            network design and infrastructure, cloud computing and DevOps Engineering.
                        </p>
        
                        <a href={Resume} target="_blank" rel='noreferrer'>Get My Resume </a>
                    </div>
                </div>
                

            </div>
  )
}

export default Showcase