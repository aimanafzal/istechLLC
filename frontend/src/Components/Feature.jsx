import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_1.png'
import featureimage1 from '../images/feature_2.png'
import featureimage2 from '../images/feature_3.png'
import featureimage3 from '../images/feature_4.png'
function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
            <FeatureBox image={featureimage} title='Design' para='Compatible Design'/>
            <FeatureBox image={featureimage1} title='Development' para='Rapid Development'/>
            <FeatureBox image={featureimage3} title='Marketing Strategy' para='Adding Customer Value'/>
            <FeatureBox image={featureimage2} title='Customer Satisfaction' para='99.97% Customer Satisfaction'/>
            
            </div>
            
        </div>
    )
}

export default Feature
