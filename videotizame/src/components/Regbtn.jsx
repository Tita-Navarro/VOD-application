import React from 'react';
import '../styles/reg-btn.css';
//import {Link} from 'react-router-dom';

const Regbtn =()=>{
    return(
        <div className='reg-btn-container'>
            <a href='#Login_' className='reg-btn reg-text'>Let's go there!</a>
                {/*<Link to='Login' className='log-btn log-text'>Login</Link>*/}
        </div>
    )
}

export default Regbtn;