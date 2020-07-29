import React from 'react';
import '../App.css';
import {Link} from 'react-scroll';
import arrow from './arrow.png';
import thatsme from './thatsme.jpg';

function About() {
  return (
    <div className="App about mt0" id='about' style={{overflowY:'auto' ,background:'#333'}} >
      <div className='pv abouthead pv1' style={{position:'relative',maxHeight:'20vh'}} >
      <div style={{justifySelf:'center',zIndex:'1'}}>
        <p className=' tc white mv2' style={{fontFamily:'Nunito', fontSize:'4.5vmax', fontWeight:'600'}}>About me</p>
        <p className='tc white mv1' style={{fontFamily:'Nunito', fontSize:'2vmax', fontWeight:'500'}}>
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
                  , justifyContent:'space-evenly', alignItems:'center',height:'80vh'}}>
          <div className='' style={{ width:'60vw', fontSize:'2.5vmin',lineHeight:'1.7'}}>
            <p className='white mh0 tl ' style={{fontWeight:'600', fontSize:'3.5vmax'}}>Who am I?</p>
            <div>
            <p className='tl white  pa2  '> Hi, I am Manas Kulkarni. A Mumbai based Developer.<br/>I am pursuing M.Tech in Artificial Intelligence (2020-2022) at NMIMS. I have completed B.E. in Electronics (2019) from VES Institute of Technology.
            <br/> Interested in exploring the field of Machine Learning and Deep Learning.<br/> And passionate about Cricket :)  <br/>
           I have come a long way from writing my first Hello World  C program in 2015 to building my own Full Stack Web App.
           </p>
            </div>
          </div>
          <div className=' mv2' style={{width:'50vmin',}}>
            <div className=' br4 pointer '  style={{justifySelf:'center', width:'50vmin',
             display:'flex',flexDirection:'column', justifyContent:'center',
             alignItems:'center'}} >
              <img src={thatsme} alt='' className='mh1 bg-white' style={{boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.568), 0 6px 20px 0 rgba(0, 0, 0, 0.568)', width:'50vmin',}}/>
              <p className='tc ph2 ml1 white pt1 ' style={{fontSize:'1.1em'}}>
                <strong >That's Me</strong>
              </p>
            </div>
          </div>
      </div>
     
    </div>
  );
}

export default About;