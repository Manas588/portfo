import React from 'react';
import '../App.css';
import {Link} from 'react-scroll';
import arrow from './arrow.png';
import Algo from './Certificates/Algo.jpg';
import ML from './Certificates/ML.jpg';
import Py from './Certificates/Py.jpg';
import WD from './Certificates/WD.jpg';
import udemy from './udemy-logo.png';


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
                

                    <div style={{width:'100%',margin:'0 auto',position:'absolute',
                    top:'50%',transform: 'translateY(-50%)',display:'flex',flexDirection:'row',
                    flexWrap:'wrap' ,justifyContent:'space-evenly',alignContent:'center', fontSize:'3vmin'}}>
                        <div className='grow pointer white certificate pa2 br3' onClick={()=>this.imageOpen('a')} ><img src={udemy}  alt='' width='40vmax'/><p><strong>The Complete Web Developer in 2020: Zero to Mastery</strong></p></div>
                        <div className='grow pointer white certificate pa2 br3' onClick={()=>this.imageOpen('b')}><img src={udemy} alt='' width='40vmax'/><p><strong>Complete Python Developer in 2020: Zero to Mastery</strong></p></div>
                        <div className='grow white pointer certificate pa2 br3' onClick={()=>this.imageOpen('c')}><img src={udemy} alt='' width='40vmax'/><p><strong>Complete Machine Learning and Data Science: Zero to Mastery</strong></p></div>
                        <div className='grow white pointer certificate pa2 br3' onClick={()=>this.imageOpen('d')}><img src={udemy} alt='' width='40vmax'/><p><strong>Master the Coding Interview: Data Structures + Algorithms</strong></p></div>
                        
                    </div>
                
                </div>
            );
        } else {
            return (
                <div className="App about mt0" id='certifications'
                style={{background:'#333', position:'relative',overflowY:'auto',fontFamily:'Nunito',display:'flex',flexDirection:'column',justifyContent:'center',
               alignItems:'center'}}>
                    <div className='white pa3 pointer grow ' style={{fontSize:'3vw', position:"absolute",right:'1vw',top:'1vh'}} onClick={this.back}>x</div>
                    <div><img src={this.whichImage()} alt=''style={{width:'100vmin',justifySelf:'center',alignSelf:'center'}}/></div>
                </div>
            );
        }
    }
}

export default Certifications;