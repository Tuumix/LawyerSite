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
                <div className="Block" id="bio" top>
                    <div className="Block-Child">
                        <TextGrid/>
                    </div>
                </div>
                <Fade left> 
                    <div className="Block" id="contato">
                        <Email/>
                        <a className="Scroll-Top" onClick={() => scroll.scrollToTop()}><ion-icon name="chevron-up" size="large"></ion-icon></a>
                    </div>
                </Fade>
            </Fragment>
        </div>
    )
}