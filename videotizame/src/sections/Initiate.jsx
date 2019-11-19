import React from 'react';
import '../styles/Initiate.css';
import Logbtn from '../components/Logbtn';
import Info from '../components/Info';
import Regbtn from '../components/Regbtn';
//import {Link} from 'react-router-dom';

const Initiate =()=>{
    return(
        <div className='Initiate'>
            <div className='Initiate-container'>
                <br/>
                <Logbtn/>
                <br/> <br/> <br/> <br/>
                <Info />
                <br/>
                <Regbtn />

            </div>
        </div>
    )

}

export default Initiate;