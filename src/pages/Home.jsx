import React from 'react'

// components imports
import Header from '../components/Header'
import ShowCase from '../components/ShowCase'
import AboutUs from '../components/AboutUs'
import Premium from '../components/Premium'
import Sustainable from '../components/Sustainable'
import PopularPick from '../components/PopularPick'
import Taste from '../components/Taste'
import Questions from '../components/Questions'
import Join from '../components/Join'

// image import
import showcaseImg from "../assets/images/showcase.jpg"

function Home() {
  return (
    <div style={{
        fontFamily:"Kalnia",
    }} className='font-light'>
        <div
            style={{
                backgroundColor:"gray",
                backgroundImage:`url(${showcaseImg})`,
                backgroundBlendMode:"darken",
                backgroundSize:"cover",
                backgroundPosition:"center",
                color:"white"
            }}
        >
            <div className='w-[90%] m-auto text-xl'>
                <Header/>
                <ShowCase/>
            </div>
        </div>
        <AboutUs/>
        <Premium/>
        <Sustainable/>
        <PopularPick/>
        <Taste/>
        <Questions/>
        <Join/>
    </div>
  )
}

export default Home