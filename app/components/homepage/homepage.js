import React from 'react'
import Slider from "./slider"
import AboutSec from "./aboutsec"
import Innovation from "./innovation"
import Product from "./product"
import Sustainability from './sustainability'
import Media from "./media"


export default function homepage() {
  return (
    <>
        <Slider />
        <AboutSec />
        <Innovation />
        <Product />
        <Sustainability />
        <Media />
    </>
  )
}
