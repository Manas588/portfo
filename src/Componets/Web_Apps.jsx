import React from 'react';
import PGfind from './Projects/PGfind.JPG'
import robofr from './Projects/robofr.JPG'
import smartBrain from './Projects/smartBrain.JPG'
import react  from './Projects/react.png';

import '../App.css';

function Web_Apps() {
    const projs = [{name:'Smart Brain', image: smartBrain, github:'https://github.com/Manas588/smart-brain',link:'https://manas588.github.io/smart-brain/'}, 
    {name:'PG Find', image: PGfind, github:'https://github.com/Manas588/Pg_find',link:'https://manas588.github.io/Pg_find/'}, 
    {name:'Robo Friends', image: robofr, github:'https://github.com/Manas588/robofriends',link:'https://manas588.github.io/robofriends/'}]
  return (
    <div className='projectdisplay'>
        <div className='w-90' style={{display:'flex', flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
         { projs.map((proj,i)=><div className='proj ma4 grow pointer' key={i}>
                                    <img src={proj.image} alt='' style={{width:'100%',height:'100%',position:'absolute',top:'0',bottom:'0',left:'0',right:'0',zIndex:'-1'}}/>
                                    <div className='overlay'>
                                        <p>{proj.name}</p>
                                        <img src={react} alt='' className='react'/>
                                        <div className='overlayLinks'>
                                            <a href={proj.github} target='blank' className='grow dim' style={{textDecoration:'none', color:'white'}}>View Github Repo</a>
                                            <a href={proj.link} target='blank' className='grow dim' style={{textDecoration:'none', color:'white'}}>View App</a>
                                        </div>
                                    </div>
                                </div>)}
        </div>
    </div>
  );
}
export default Web_Apps;