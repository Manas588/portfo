import React from 'react';
import '../App.css';
import {Link} from 'react-scroll';
import arrow from './arrow.png';
import cap from './cap.png';

function About() {
  return (
    <div className="App about mt0" id='about' style={{overflowY:'auto' ,background:'#333'}} >
      <div className='pv abouthead pv1' style={{position:'relative'}} >
      <div style={{justifySelf:'center',zIndex:'1'}}>
        <p className=' tc white mv2' style={{fontFamily:'Nunito', fontSize:'4.5vmax', fontWeight:'600'}}>About me</p>
        <p className='tc white mv1' style={{fontFamily:'Nunito', fontSize:'2.5vmax', fontWeight:'500'}}>
        Excited about learning, building new things and expanding my knowledge.
        </p>
        </div>
        <div  style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1.1vw',top:'2vmin' ,zIndex:'2'}}>
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1000}
        > <img alt ='' src={arrow} className='grow pointer dim' style={{width:'5vmin', height:'auto'}}/></Link></div>
         <div   style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1vw',top:'6vmin' ,zIndex:'2'}}>
        <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1000}
        > <img src={arrow} alt='' className='grow pointer dim' style={{transform: 'rotate(180deg)', width:'5vmin', height:'auto'}}/></Link></div>
       
      </div>
      <div className=' mt2' style={{ width: '100vw',fontFamily:'Nunito', display:'flex', flexDirection:'row',flexWrap:'wrap' 
                  , justifyContent:'space-evenly', alignItems:'center',height:''}}>
          <div className='' style={{height:'100%', width:'80vmin', fontSize:'2vmax',}}>
            <p className='white mh0 tl ' style={{fontWeight:'600', fontSize:'3vmax'}}>Who am I?</p>
            <div>
            <p className='tl white  pa2  '> Hi, I am Manas Kulkarni. A Mumbai based Developer.<br/> I have a Bachelor of Engineering Degree in Electronics.
            <br/> Interested in exploring the field of Machine Learning and Deep Learning.<br/> And passionate about Cricket :)  <br/>
           I have come a long way from writing my first Hello World  C program in 2015 to building my own Full Stack Web App.
           </p>
            </div>
          </div>
          <div className=' mv2 ' style={{width:'30vmin',}}>
            <div className=' br4 grow pointer '  style={{justifySelf:'center', width:'30vmin',
             display:'flex',flexDirection:'column', justifyContent:'center',
             alignItems:'center'}} >
              <img src={cap} alt='' className='mh1 bg-white br4' style={{border:'4px solid black', width:'20vmin',}}/>
              <p className='tc ph2 ml1 white pt1 ' style={{fontSize:'1.1em'}}>
                <strong >B.E. Electronics</strong><br/>2019<br/>Vivekanad Education Society's Institue of Technology, Chembur
              </p>
            </div>
          </div>
      </div>
     
    </div>
  );
}

export default About;