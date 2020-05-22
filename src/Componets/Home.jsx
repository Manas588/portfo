import React from 'react';
import Nav from './Nav';
import {Link} from 'react-scroll';
import logo from '../logo.png';
import arrow from './arrow.png';

import '../App.css';
import 'react-particles-js';
import Particles from 'react-particles-js';

const params= {
  "absorbers": [],
  "background": {},
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "detectRetina": true,
  "emitters": [],
  "fpsLimit": 30,
  "infection": {
    "cure": false,
    "delay": 0,
    "enable": false,
    "infections": 0,
    "stages": []
  },
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": false,
        "mode": "push"
      },
      "onDiv": {
        "elementId": "",
        "enable": false,
        "mode": []
      },
      "onHover": {
        "enable": true,
        "mode": "",
        "parallax": {
          "enable": false,
          "force": 20,
          "smooth": 20
        }
      },
      "resize": true
    },
    "modes": {
      "absorbers": [],
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.9,
        "size": 20
      },
      "connect": {
        "distance": 80,
        "lineLinked": {
          "opacity": 0.9
        },
        "radius": 60
      },
      "emitters": [],
      "grab": {
        "distance": 400,
        "lineLinked": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.8,
        "speed": 2
      },
      "slow": {
        "factor": 3,
        "radius": 200
      }
    }
  },
  "particles": {
    "collisions": {
      "enable": true,
      "mode": "bounce"
    },
    "color": {
      "value": "rgb(20, 180, 245)"
    },
    "lineLinked": {
      "blink": false,
      "color": {
        "value": "rgb(50, 180, 245)"
      },
      "consent": false,
      "distance": 150,
      "enable": true,
      "opacity": 0.8,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "lime"
        },
        "enable": false
      },
      "width": 1
    },
    "move": {
      "attract": {
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "direction": "none",
      "enable": true,
      "noise": {
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false,
        "factor": {
          "horizontal": {
            "value": 50,
            "offset": 0
          },
          "vertical": {
            "value": 10,
            "offset": 40000
          }
        }
      },
      "outMode": "out",
      "random": false,
      "speed": 2,
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      },
      "vibrate": false
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800,
        "factor": 1500
      },
      "limit": 0,
      "value": 100
    },
    "opacity": {
      "animation": {
        "enable": false,
        "minimumValue": 0.1,
        "speed": 1,
        "sync": false
      },
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": 0.5
    },
    "rotate": {
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "random": false,
      "value": 0
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {
        "character": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "image": {
          "fill": true,
          "close": true,
          "height": 100,
          "replaceColor": true,
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100
        },
        "images": {
          "fill": true,
          "close": true,
          "height": 100,
          "replaceColor": true,
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100
        },
        "polygon": {
          "fill": true,
          "close": true,
          "sides": 5
        },
        "star": {
          "fill": true,
          "close": true,
          "sides": 5
        }
      },
      "type": "circle"
    },
    "size": {
      "animation": {
        "destroy": "none",
        "enable": false,
        "minimumValue": 0.1,
        "speed": 40,
        "startValue": "max",
        "sync": false
      },
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": 5
    },
    "stroke": {
      "color": {
        "value": "#000000"
      },
      "width": 0,
      "opacity": 1
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    }
  },
  "pauseOnBlur": true,
  "polygon": {
    "draw": {
      "enable": false,
      "stroke": {
        "color": {
          "value": "#fff"
        },
        "width": 0.5,
        "opacity": 1
      }
    },
    "enable": false,
    "inline": {
      "arrangement": "one-per-point"
    },
    "move": {
      "radius": 10,
      "type": "path"
    },
    "scale": 1,
    "type": "none",
    "url": ""
  }
}

function Home({onclick}) {
  return (
    <div className="App home" id='home' style={{overflowY:'auto'}}>

      <Particles params= {params} className="particles"/>
        
        <img src={logo} alt=''  class="shadow-5 grow br3 pointer dim" style={{height: '10vmin', width:'auto',position:'absolute', left:'1vw', top:'1vh'}}/>
      
      <Nav onclick= {onclick}/>
      <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', height:'100%', alignItems:'center'}}>
        
        <p href="#" class="typewrite mh5" data-period="2000" data-type='[ "Hellllooooo!"," I am Manas.", "I am a Web Developer,", "A Python Developer,","and a Machine Learning Enthusiast", "I Love to Develop :)" ]'>
          <span class="wrap"></span>
        </p>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration= {1000}>      
                <div class="shadow-1 grow mt6 pa0 dim pointer"style={{
                            width:'10vmin', height:'10vmin',borderRadius:'50%', background: 'rgb(58, 189, 255)'}} >
                  <img src={arrow} alt='' style={{width:'8vmin', height:'auto', transform:'rotate(180deg)'}}/>
                </div>
              </Link>
      </div>
    
    </div>
  );
}

export default Home;