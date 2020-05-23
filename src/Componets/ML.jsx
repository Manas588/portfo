import React from 'react';
import bulldozer from './Projects/bulldozer.jpg'
import heart from './Projects/heart.jpeg'

// import react  from './Projects/react.png';

import '../App.css';

function ML() {
    const projs = [{name:'Heart Disease Prediction', image: heart, github:'https://github.com/Manas588/Heart-Disease-Prediction',link:''}, 
    {name:'Bulldozer Price Prediction', image: bulldozer, github:'https://github.com/Manas588/buldozer_price-_prediction',link:''}]
    console.log('ML');
  return (
    <div className='projectdisplay'>
        <div className='w-90' style={{display:'flex', flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
         { projs.map((proj,i)=><div className='proj ma4 grow pointer' key={i}>
                                    <img src={proj.image} alt='' style={{width:'100%',height:'100%',position:'absolute',top:'0',bottom:'0',left:'0',right:'0',zIndex:'-1'}}/>
                                    <div className='overlay'>
                                        <p>{proj.name}</p>
                                        {/* <img src={react} alt='' className='react'/> */}
                                        <div className='overlayLinks'>
                                            <a href={proj.github} target='blank' className='grow dim' style={{textDecoration:'none', color:'white'}}>View Jupyter Notebook</a>
                                            
                                        </div>
                                    </div>
                                </div>)}
        </div>
    </div>
  );
}
export default ML;