import React from 'react';
import Home from './Componets/Home';
import  Certifications  from "./Componets/Certifications";
import About from './Componets/About';
import Projects from './Componets/Projects';
import Contact from './Componets/Contact';
import Skills from './Componets/Skills';
import './App.css';

class App extends React.Component {

  render() {
      return (
        <div className="App" >
            <Home/>
            <About />
            <Projects/>
            <Skills/>
            <Certifications/>
            
            <Contact/>
        </div>
      );
 
  }
}

export default App;
