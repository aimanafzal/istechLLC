import React from 'react'

function ServicesBox(props) {
    return (
        
            <div className='a1-box '>
         <div className='a-b1-img'>
         <img src={props.image}/> 
             </div>   
        <div className='s-b-text'>
            <h2 className='hello'>{props.title}</h2>
        </div>
        </div>
        
    )
}

export default ServicesBox
