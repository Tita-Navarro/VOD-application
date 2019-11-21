import React from 'react';
import '../styles/Info.css';

const Info =()=>{
    return(
        <div className='Info-container'>
            <img src={require('../images/VOD-app.png')} alt='brand' className='brand-img'/>
            <h2 className='Info-text'>
                Experiment the magical world of <b>VOD app</b>, come,
                prove and see all movies you want.<br/> Everytime, 
                everywhere for less than the competition.
            </h2>
        </div>
    )
}

export default Info;