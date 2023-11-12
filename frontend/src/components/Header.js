import React from 'react'

function Header() {
  return (
    <header>
            <div class="logo">
                <h1>KOSY</h1>
            </div>

            <nav class="topnav">
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>

            <div id="social-nav" class="topnav">
                <ul>
                    <li><a href="https://github.com/TheNexusDeveloper" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/kosisochukwu-okeke-505490242/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/iamkosy11" target="_blank" rel="noreferrer"><i class="bi bi-twitter-x"></i></a></li>
                    <li><a href="https://www.instagram.com/iamkosy11/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a></li>
                </ul>
            </div>

            {/* <div id="theme-change" class="topnav" onclick="themeChanger()">
                <button class="icon" onclick="menuBar()">
                    <i class="bi bi-moon theme" id="dark" ></i>
                     <i class="bi bi-sun theme" id="light" ></i>
                </button>
            </div>

            <div class="topnav" id="menu">
                <button class="icon" onclick="menuBar()">
                    <i class="bi bi-list"></i>
                    <i class="bi bi-x-lg"></i>
                  </button>
            </div> */}

        </header>
  )
}

export default Header