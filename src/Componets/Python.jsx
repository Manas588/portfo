import React from 'react';
import password from './Projects/password.jpg'
import startup from './Projects/startup.JPG'
import twitter from './Projects/twitter.jpg'
import webscrap  from './Projects/websrcap.jpg';
import sms  from './Projects/sms.jpg';
import py from './Skills/PY.png';
import flask from './Projects/flask.png'
 
import '../App.css';

function Python() {
    const projs = [{name:'Startup Landing with Flask', image: startup, github:'https://github.com/Manas588/startup_landing',link:'',logo: flask}, 
    {name:'Password Checker', image: password, github:'https://github.com/Manas588/Password-Checker',link:'',logo: py}, 
    {name:'Twitter Bot', image: twitter, github:'https://github.com/Manas588/twitterbot',link:'',logo: py}, 
    {name:'Web Scraper', image: webscrap, github:'https://github.com/Manas588/python-web-scarper-',link:'',logo: py}, 
    {name:'SMS sender', image: sms, github:'https://github.com/Manas588/sms-sender',link:'',logo: py}]
    
   
    console.log('py');
  return (
    <div className='projectdisplay'>
        <div className='w-90' style={{height:'90%',display:'flex', flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
         { projs.map((proj,i)=><div className='proj ma4 grow pointer' style={{ width: '30vmax', height: '15vmax'}} key={i}>
                                    <img src={proj.image} alt='' style={{width:'100%',height:'100%',position:'absolute',top:'0',bottom:'0',left:'0',right:'0',zIndex:'-1'}}/>
                                    <div className='overlay'>
                                        <p>{proj.name}</p>
                                        <img src={proj.logo} alt='' className='react'/>
                                        <div className='overlayLinks'>
                                            <a href={proj.github} target='blank' className='grow dim' style={{textDecoration:'none', color:'white'}}>View Github Repo</a>
                                            {/* <a href={proj.link} target='blank' className='grow dim' style={{textDecoration:'none', color:'white'}}>View App</a> */}
                                        </div>
                                    </div>
                                </div>)}
        </div>
    </div>
  );
}
export default Python;