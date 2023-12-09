import React from 'react'
import './KHUB.css'
import K from '../images/K.gif';
const KHUB = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>More Than 12 years,</p>
                    <p>K-HUB</p>
                    <p>Internships give students valuable on-the-job experience at our various sectors. Students are encouraged to have at
         least one internship before graduation, and many of our students complete more than one.</p>
                    <p> K-HUB is an internship program that gives campus students a valuable on-the-job experience at our various sectors.
      Students are encouraged to build their imagination into reality, put their ideas into action. </p>
    
                    
                </div>
                <div className='col-2'>
                    <img src={K} alt='K' />
                </div>
            </div>
        </div>
    )
}

export default KHUB
