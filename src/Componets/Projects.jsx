import React from 'react';
import {Link} from 'react-scroll';
import arrow from './arrow.png';
import ml from './Projects/mlprojs.jpg';
import py from './Projects/python-proj.jpg';
import wa from './Projects/web-app.png';
import '../App.css';

function Projects() {
  return (
    <div className=" App projects" id='projects' style={{background:'#333', position:'relative',overflowY:'auto',fontFamily:'Nunito'}}>
      <div style={{width:'100%', position:"absolute",top:'0',zIndex:'0'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#29b6fc" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,192C1120,235,1280,277,1360,298.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
      <div  style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1.1vw',top:'2vmin' ,zIndex:'2'}}>
          <Link
                activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1000}
                    > <img alt ='' src={arrow} className='grow pointer dim' style={{width:'5vmin', height:'auto'}}/></Link></div>
      <div   style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1vw',top:'6vmin' ,zIndex:'2'}}>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1000}
                    > <img src={arrow} alt='' className='grow pointer dim' style={{transform: 'rotate(180deg)', width:'5vmin', height:'auto'}}/></Link></div>

      <div className='project white' style={{position:'relative',left:'25%',top:'8vh', zIndex:'1',fontSize: '2vmax',fontWeight:'600'}}>
        <div style={{width:'60%',display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'center',justifyContent:'flex-start'}}>
          <img src={wa} alt='web-app' className='mv3 grow mr3 br2 projim' style={{width:'15vmax'}}/><p className='tl'>Web Applications</p></div>
        <div style={{width:'60%',display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'center',justifyContent:'flex-start'}}>
          <img src={py} alt='web-app' className='mv3 grow mr3 br2 projim' style={{width:'15vmax'}}/><p className='tl'>Python Projects</p></div>
        <div style={{width:'60%',display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'center',justifyContent:'flex-start'}}>
          <img src={ml} alt='web-app' className='mv3 grow mr3 br2 projim' style={{width:'15vmax'}}/><p className='tl'>Machine Learning Projects</p></div>
      </div>     
    </div>
  );
}
export default Projects;