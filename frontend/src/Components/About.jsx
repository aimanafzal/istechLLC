import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image ' >
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text mt-3 '>
               <h2>{props.title}</h2> 
               <p className='mt-2'>We have team comprised of experienced professionals. Our creative team employs the most cutting-edge, most advanced methods to make your life easier and your client's experiences more pleasant. We provide efficient and relaible solutions for almost all kinds of business needs.</p>
            </div>
        </div>
    )
}

export default About

