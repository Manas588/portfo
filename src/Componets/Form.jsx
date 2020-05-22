import React from 'react';
import '../App.css';
import './Contact.css';

const Form = ()=> {
    return(
        
            <div class="container pv2 br4 mh1 shadow-5">
                <form action="/action_page.php" style={{ display: 'flex', flexDirection: 'column',justifyContent: 'space-evenly',alignItems:'center'}}>
                <label style={{fontSize:'5vh'}} className='white'>Contact Me</label>
                <input style={{fontSize:'3vh'}} className='br2  tc  w-90 ' type="text" id="fname" name="firstname" placeholder="Name" required/>
                <br/>
                <input style={{fontSize:'3vh'}} className='br2  tc  w-90 '  type="email" id="fname" name="firstname" placeholder="Email" required/><br/>
                <textarea style={{fontSize:'3vh'}} className='br2   tc w-90 ' id="subject" name="subject" placeholder="Message" ></textarea><br/>
            
                <input style={{fontSize:'3vh'}} className='br2  grow shadow-5 tc pa1  ' type="submit" value='Submit'/>
                </form>
            </div>
        
    );

}
export default Form;