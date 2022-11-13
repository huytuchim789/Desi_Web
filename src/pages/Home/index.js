import React from 'react'
import Header from '../../components/Header'
import Banner from './Banner'
import Impress from './Impress'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Newest from './Newest'
import Convenient from './Convenient'
import Outstanding from './Outstanding'
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Impress />
      <Newest />
      <Convenient />
      <Outstanding />
    </div>
  )
}
