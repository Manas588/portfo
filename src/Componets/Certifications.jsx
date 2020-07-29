import React from 'react';
import '../App.css';
import {Link} from 'react-scroll';
import arrow from './arrow.png';
import Algo from './Certificates/Algo.jpg';
import ML from './Certificates/ML.jpg';
import Py from './Certificates/Py.jpg';
import WD from './Certificates/WD.jpg';
import udemy from './udemy-logo.png';
import hr from './Certificates/hr.png';
import fcc from './Certificates/fcc.png';
import pybasic from './Certificates/pybasic.png';
import jsbasic from './Certificates/jsbasic.png';
import rd from './Certificates/rd.jpg';


class Certifications extends React.Component {
    constructor() {
        super();
        this.state = {
            image: ''
        };
    }
    imageOpen = (image)=>{this.setState({image:image})}
    back = ()=>{this.setState({image:''})}
    whichImage= () => {
       if (this.state.image==='a'){ return WD}
        else if( this.state.image==='b'){return Py}
        else if(this.state.image==='c'){return ML}
        else if(this.state.image==='e'){return rd}
        else if(this.state.image==='f'){return pybasic}
        else if(this.state.image==='g'){return jsbasic}
        else {return Algo}}
    render() {
        if(!this.state.image) { 
            return (
                <div className="App about mt0" id='certifications'style={{background:'#333', position:'relative',overflowY:'auto',fontFamily:'Nunito'}}>
                <div className='pv abouthead pv1' style={{position:'relative'}} >
                <div style={{justifySelf:'center',zIndex:'1'}}>
                    <p className=' tc white mv2' style={{fontFamily:'Nunito', fontSize:'4.5vmax', fontWeight:'600'}}>Certifications</p>
                    
                    </div>
                    <div  style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1.1vw',top:'2vmin' ,zIndex:'2'}}>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1000}
                    > <img alt ='' src={arrow} className='grow pointer dim' style={{width:'5vmin', height:'auto'}}/></Link></div>
                    <div   style={{justifySelf:'flex-end', alignSelf:'flex-start',position:'absolute',right:'1vw',top:'6vmin' ,zIndex:'2'}}>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1000}
                    > <img src={arrow} alt='' className='grow pointer dim' style={{transform: 'rotate(180deg)', width:'5vmin', height:'auto'}}/></Link></div>
                
                </div>
                

                    <div style={{width:'100%',margin:'0 auto',position:'absolute',marginTop:'10vh',display:'flex',flexDirection:'row',
                    flexWrap:'wrap' ,justifyContent:'space-evenly',alignContent:'center', fontSize:'3vmin'}}>
                     <div className=' pointer white certificate pa2 br3' onClick={()=>this.imageOpen('e')} ><img src={fcc}  alt='' width='40vmax'/><p><strong>Responsive Web Design</strong></p><p className=' blue link dim'>View Certificate</p></div>
                     <div className=' pointer white certificate pa2 br3' onClick={()=>this.imageOpen('f')} ><img src={hr}  alt='' width='40vmax'/><p><strong>Python (Basic)</strong></p><p className=' blue link dim'>View Certificate</p></div>
                     <div className=' pointer white certificate pa2 br3' onClick={()=>this.imageOpen('g')} ><img src={hr}  alt='' width='40vmax'/><p><strong>JavaScript (Basic)</strong></p><p className=' blue link dim'>View Certificate</p></div>
                        <div className=' pointer white certificate pa2 br3' onClick={()=>this.imageOpen('a')} ><img src={udemy}  alt='' width='40vmax'/><p><strong>The Complete Web Developer in 2020: Zero to Mastery</strong></p><p className=' blue link dim'>View Certificate</p></div>
                        <div className=' pointer white certificate pa2 br3' onClick={()=>this.imageOpen('b')}><img src={udemy} alt='' width='40vmax'/><p><strong>Complete Python Developer in 2020: Zero to Mastery</strong></p><p className='blue link dim'>View Certificate</p></div>
                        <div className=' white pointer certificate pa2 br3' onClick={()=>this.imageOpen('c')}><img src={udemy} alt='' width='40vmax'/><p><strong>Complete Machine Learning and Data Science: Zero to Mastery</strong></p><p className='blue link dim'>View Certificate</p></div>
                        <div className=' white pointer certificate pa2 br3' onClick={()=>this.imageOpen('d')}><img src={udemy} alt='' width='40vmax'/><p><strong>Master the Coding Interview: Data Structures + Algorithms</strong></p><p className='blue link dim'>View Certificate</p></div>
                        
                    </div>
                
                </div>
            );
        } else {
            return (
                <div className="App about mt0" id='certifications'
                style={{background:'#333', position:'relative',overflowY:'auto',fontFamily:'Nunito',display:'flex',flexDirection:'column',justifyContent:'center',
               alignItems:'center'}}>
                    <div className='white pa3 pointer grow ' style={{fontSize:'3vmax', position:"absolute",right:'1vw',top:'1vh'}} onClick={this.back}>x</div>
                    <div><img src={this.whichImage()} alt=''style={{width:'100vmin',justifySelf:'center',alignSelf:'center'}}/></div>
                </div>
            );
        }
    }
}

export default Certifications;