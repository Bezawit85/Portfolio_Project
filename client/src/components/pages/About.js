import React from 'react'
import premium from '../images/premium.jpg'
import './About.css'



const About = () => {
    return (
     
        <div className='about' id='about'>
            <div className='container'>
                <img src={premium} alt='premium' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Kifiya is a technology and services company developing scalable and secured technology platforms over the past twelve years. Over the years, Kifiya has gained a strong market understanding and expertise in distribution, microinsurance, digital agricultural services,
                         and delivery of financial technology products and services.</p>
                    <p>With our aspiration to transform into a venture holding firm, we have developed and commercialized products that are working in cross section to enhance market system, access to financial services to farmers, MSMEs and the community at large.</p>
                  
                </div>
            </div>
        </div>
    )
}

export default About
