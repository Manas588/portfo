import React from 'react';
import '../App.css';
import "./Contact.css";
import {Link} from 'react-scroll';
import arrow from './arrow.png';
import github from './github-logo.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import email from './email.png';
import location from './location.png';
import Form from "./Form";

function Contact() {
  return (
    <div className="App contact" id='contact11' style={{overflowY:'auto',position:'relative'}}>
      <div className='pv abouthead pv1' style={{position:'absolute', top:'0',width:'100%'}} >
        <div style={{justifySelf:'center',zIndex:'1'}}>
          <p className=' tc white mv2' style={{fontFamily:'Nunito', fontSize:'4.5vmax', fontWeight:'600'}}>Contact</p>
        </div>  
      </div>
      <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-evenly',flexWrap:"wrap"}}>
      <Form/>
      <div className=' mt3 tr' style={{height:'30%', fontFamily:'Nunito'}} >
        <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        
          <a href="mailto:mmk11122@gmail.com.com" ><img src={email} alt='email' height='50px' width='auto'/></a>
          <p style={{fontSize:'3vh'}} className='tc ml3'>Email me</p>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <img src={location} alt='location' height='50px' width='auto'/>
          <p style={{fontSize:'3vh'}} className='tc ml3'> Mulund, Mumbai. </p>
        </div>
      </div>
      </div>
      <div style={{position:'absolute', bottom:'1vw',right:'14vw'}}>
        <p className='pa0 ma0'>
          <a href='https://github.com/Manas588' className='ph1  dim'><img src={github} alt='github' width='30vw' height='auto'/></a>
          <a href='https://www.linkedin.com/in/manas-kulkarni-093900162/' className='ph1 dim'><img src={linkedin} alt='linkedin' width='30vw' height='auto'/></a>
          <a href='https://www.instagram.com/manas_kulkarni/?hl=en' className='ph1 dim'><img src={instagram} alt='insta' width='30vw' height='auto'/></a>
        </p>
      </div>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration= {3000}>      
                    <div className="shadow-1 grow mt6 pa0 dim pointer"style={{position:'absolute',right:'1vw',bottom:'10vw',
                                width:'10vmin', height:'10vmin',borderRadius:'50%', background: 'rgb(58, 189, 255)'}} >
                      <img src={arrow} alt='' style={{width:'8vmin', height:'auto'}}/>
                    </div>
      </Link>
      <div className="white-50"style={{fontFamily:'Nunito',position:'absolute',left:'1vw',bottom:'1vmax',fontSize:'2vw'}} >
                      © Manas Kulkarni
                    </div>
      <div style={{position:'absolute', bottom:'-10px', width:'100%',zIndex:'-1'}}>
        
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fillOpacity="1" d="M0,192L80,208C160,224,320,256,480,224C640,192,800,96,960,48C1120,0,1280,0,1360,0L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    </div>
  );
}

export default Contact;