
import Header from './components/Header'
import Footer from './components/Footer'

// import  { Router } from 'react-router-dom'
import Showcase from './components/Showcase';
// import About from './components/About';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

//     var duration;

// function loading (){
//     duration = setTimeout(showPage, 3000);
// }

// function showPage (){
//     document.getElementById('loader').style.display = 'none'
//     document.getElementById('root').style.display = 'block'
// }
  return (
    <div>
        <Header/>

        <main>
            <Showcase/>
            {/* <About/> */}
            {/* <Skills/> */}
            <Projects/>
            <Contact/>
        </main>

        <Footer/>
    </div>
  );
}

export default App;
