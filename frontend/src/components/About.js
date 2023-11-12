import React from 'react'
import profile from '../images/profile.JPG'

function About() {
  return (
    <div class="section" id="About">
                <div class="heading">
                    <h2>--- About ---</h2>
                </div>

                <div class="container">
                    <div class="text">
                        <p>
                            My name is Kosy Okeke, a software developer based in Lagos, Nigeria.
                            Graduate of Computer Engineering from Madonna University Nigeria.
                            
                        </p>
                            <br/>
                        <p>
                            Technology has always been a niche from a very young age. I always wanted to figure out how things work and create things.
                            My very first programming language was QBASIC (LOL) which I was introduced to in 2013 then JAVA in 2014 (never went back to it), HTML and CSS in 2015, and finally python in 2018.
                            I started programming in 2020 during the COVID-19 lockdown. I used this period learning JavaScript and python
                        </p>
                            <br/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Unde sunt sapiente ea at explicabo inventore nostrum modi nesciunt dolore facilis, aut maiores maxime tempore cupiditate incidunt voluptatem laborum. 
                             Delectus, quis?
                        </p>

                    </div>
        
                    <div class="photo">
                        <img src={profile} alt="Kosy Okeke" width="100%" />
                    </div>
                </div>
    </div>
  )
}

export default About