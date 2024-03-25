import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

export default function BodyCompponents (){
    return(
        <bodycomp>
            <div className='bodyContainer' >
            <div className="firstElement"></div>
            <div className="bodyElements">
            <div className="card">    
                <div className='card-content'>
                        <div className='card-front'>
                            Assistant Systems Engineer
                        </div>
                        <div className='card-back'>
                            Product Support Analyst
                        </div>
                    </div>
                </div>
            </div>
            <div className='bodyElements'></div>
            </div>
        </bodycomp>
    )
}