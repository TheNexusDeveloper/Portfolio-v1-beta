import React from 'react'
import htmllogo from '../images/htmllogo.png'
import css from '../images/css.png'
import js from '../images/js.png'
import bootstrap from '../images/bootstrap.png'
import physics from '../images/physics.png'
import redux from '../images/redux.png'
import nodejs from '../images/nodejs.png'
import python from '../images/python.png'
import django from '../images/django.png'
import drf from '../images/drf.png'
import mysql from '../images/mysql.png'
import postgresql from '../images/postgresql.png'
import ubuntu from '../images/ubuntu.png'
import vscode from '../images/vscode.png'
import linux from '../images/linux.png'
import windows from '../images/windows.png'
import postman from '../images/postman.png'
import github from '../images/github.png'
import git from '../images/git.png'
import cisco from '../images/cisco.png'


function Skills() {
  return (
    <div class="section" id="Skills">
    <div class="heading">
        <h2>--- My Tech Stack ---</h2>
    </div>

    <div class="container">
        <ul class="skill-icons">
            
            <li><img src={htmllogo} alt="html-icon"></img> </li>
            <li><img src={css} alt="css-icon"></img> </li>
            <li><img src={js} alt="js-icon"></img></li>
            <li><img src={bootstrap} alt="bootstrap-icons"/></li>
            <li><img src={physics} alt="react-icon"/></li>
            <li><img src={redux} alt="redux-icon"/></li>
            <li><img src={nodejs} alt="node-js-icon"/></li>
            <li><img src={python} alt="python-icon"/></li>
            <li><img src={django} alt="django-icon"/></li>
            <li><img src={drf} alt="drf-icon" width="70px"/></li>
            <li><img src={mysql} alt="mysql-icon"/></li>
            <li><img src={postgresql} alt="postgresql-icon"/></li>
            <li><img src={ubuntu} alt="icon"/></li>
            <li><img src={vscode} alt="icon"/></li>
            <li><img src={linux} alt="icon"/></li>
            <li><img src={windows} alt="icon"/></li>
            <li><img src={postman} alt="postman-icon"/></li>
            <li><img src={git} alt="icon"/></li>
            <li><img src={github} alt="icon"/></li>
            <li><img src={cisco} alt="icon"/></li>
        </ul>
    </div>
    
</div>
  )
}

export default Skills