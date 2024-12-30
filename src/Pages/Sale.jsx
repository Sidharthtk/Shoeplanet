import React from 'react'
import Products from '../Components/Products'
import SaleBar from '../Components/SaleBar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'


function Sale() {
    return (
        <div>
            <Header/>
            <SaleBar />
            <Products />
            <Footer/>
        </div>
    )
}

export default Sale