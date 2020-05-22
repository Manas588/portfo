import React from 'react';
import '../App.css';

import {Link} from 'react-scroll';
function Nav({onclick}) {
  return (
    <div className="App nav   pa0 ma0 " >
    
        
        <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1000}
        ><p className=' pointer link navitems shadow-5 pl2 ' onClick={onclick} style={{borderLeft:'0px'}}>About Me</p></Link>
        
        <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1500}
        ><p className=' pointer link navitems  shadow-5 ' onClick={onclick}>Projects</p></Link>
        <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration= {2000}
        ><p className=' pointer link navitems shadow-5' onClick={onclick} >Skills</p></Link>
        <Link
            activeClass="active"
            to="certifications"
            spy={true}
            smooth={true}
            offset={0}
            duration= {2500}
        ><p className=' pointer link navitems shadow-5' onClick={onclick} >Certifications</p></Link>
           <Link
            activeClass="active"
            to="contact11"
            spy={true}
            smooth={true}
            offset={0}
            duration= {3000}
        ><p className=' pointer link navitems shadow-5 pr2' onClick={onclick}>Contact</p></Link>

     
    </div>
  );
}

export default Nav;