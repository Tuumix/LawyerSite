import React, {Fragment} from 'react'
import Fade from 'react-reveal'
import Email from './Email'
import TextGrid from './TextGrid'
import {animateScroll as scroll} from 'react-scroll'
import './Middle.css'

export default () => {
    return (
        <div className="Middle">
            <Fragment>
                <Fade right>
                    <div className="Block" id="bio" top>
                        <div className="Block-Child">
                            <TextGrid/>
                        </div>
                    </div>      
                </Fade>
                <Fade left> 
                    <div className="Block" id="contato">
                        <Email/>
                    </div>
                </Fade>
            </Fragment>
        </div>
    )
}