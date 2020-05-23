import React from 'react';
import '../App.css';
import {Link} from 'react-scroll';
import arrow from './arrow.png';
import html from "./Skills/HTML5.png";
import css from "./Skills/CSS.png";
import express from "./Skills/express.png";
import js from "./Skills/JS.png";
import matlab from "./Skills/matlab.png";
import node from "./Skills/node.png";
import npm from "./Skills/npm.png";
import py from "./Skills/PY.png";
import react from "./Skills/react.png";
import skl from "./Skills/skl.png";
import sql from "./Skills/sql.png";


function Skills() {
  const skills = [html, css, js, py, react, express, npm, node, sql, skl, matlab];
  return (
    <div className="App skills mt0" id='skills' style={{overflowY:'auto',position:'relative'}} >
      <div className='pv abouthead pv1' style={{position:'absolute', top:'0',width:'100%'}} >
      <div style={{justifySelf:'center',zIndex:'1'}}>
        <p className=' tc white mv2' style={{fontFamily:'Nunito', fontSize:'4.5vmax', fontWeight:'600'}}>My Skills</p>
       
        </div>
        <div  style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1.1vw',top:'2vmin' ,zIndex:'2'}}>
        <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1000}
        > <img alt ='' src={arrow} className='grow pointer dim' style={{width:'5vmin', height:'auto'}}/></Link></div>
         <div   style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1vw',top:'6vmin' ,zIndex:'2'}}>
        <Link
            activeClass="active"
            to="certifications"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1000}
        > <img src={arrow} alt='' className='grow pointer dim' style={{transform: 'rotate(180deg)', width:'5vmin', height:'auto'}}/></Link></div>
       
      </div>
     <div className='mt6'
     style={{display:'flex',flexWrap:'wrap',flexDirection:'row',width:'70%',justifyContent:'space-evenly',height:'90%',alignItems:'center'}}>
        {skills.map(skill=><img src={skill} alt='' className='pa3' style={{width:'20vmin'}}/>)}
     </div>
     
    
     
    </div>
  );
}

export default Skills;