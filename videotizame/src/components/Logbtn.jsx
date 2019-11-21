import React from 'react';
import '../styles/log-btn.css';
import {Link} from 'react-router-dom';

const Logbtn =()=>{
    return(
        <div className='log-btn-container'>
            {/*<a href='#Login_' className='log-btn log-text'>Login</a>*/}
                <Link to='/Login' className='log-btn log-text'>Sign in</Link>
        </div>
    )
}

export default Logbtn;