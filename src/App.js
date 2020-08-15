import React from 'react'
import Header from './componentes/Header'
import Middle from './componentes/Middle'
import Footer from './componentes/Footer'

export default() => {
    return (
        <div className="App">
            <Header/>
            <Middle/>
            <Footer/>
        </div>
    )
}