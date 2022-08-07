import React from 'react'
import ServicesBox from './ServicesBox'
import featureimage from '../images/SERVICES/1.png'
import featureimage1 from '../images/SERVICES/2.png'
import featureimage2 from '../images/SERVICES/3.png'
import featureimage3 from '../images/SERVICES/4.png'
import featureimage4 from '../images/SERVICES/5.png'
import featureimage5 from '../images/SERVICES/6.png'
import featureimage6 from '../images/SERVICES/7.png'
import featureimage7 from '../images/SERVICES/8.png'
import featureimage8 from '../images/SERVICES/9.png'
import featureimage9 from '../images/SERVICES/10.png'
import featureimage10 from '../images/SERVICES/11.png'
import featureimage11 from '../images/SERVICES/12.png'
import featureimage13 from '../images/SERVICES/14.png'
import featureimage14 from '../images/SERVICES/15.png'
import featureimage15 from '../images/SERVICES/16.png'



function Services() {
    return (
        <div>
            <div id='abc'  >
            <div className='a-container'>
            <ServicesBox image={featureimage} title='GIT'/>
            <ServicesBox image={featureimage1} title='NODE JS'/>
            <ServicesBox image={featureimage2} title='REACT JS'/>
            <ServicesBox image={featureimage3} title='MONGO DB'/>
            </div>
            
       
        
            <div className='a-container'>
            <ServicesBox image={featureimage4} title='AWS(EC2,ELASTIC IP)'/>
            <ServicesBox image={featureimage5} title='FIREBASE HOSTING'/>
            <ServicesBox image={featureimage6} title='HEROKU'/>
            <ServicesBox image={featureimage7} title='MICROSERVICES'/>
            </div>
            <div className='a-container'>
            <ServicesBox image={featureimage8} title='BLOCKCHAIN'/>
            <ServicesBox image={featureimage9} title='PYTHON'/>
            <ServicesBox image={featureimage10} title='DJANGO'/>
            <ServicesBox image={featureimage11} title='AWS E2'/>
            </div>
            <div className='a-container'>
            <ServicesBox image={featureimage11} title='AWS S3' />
            <ServicesBox image={featureimage13} title='GRAPH QL'/>
            <ServicesBox image={featureimage14} title='SERVERLESS JS'/>
            <ServicesBox image={featureimage15} title='PAY PAL'/>
            </div>
            </div>
        </div>
    )
}

export default Services
