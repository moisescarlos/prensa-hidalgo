import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import LastNews from '../components/LastNews'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet titleTemplate="Prensa Hidalgo">
        <script data-ad-client="ca-pub-1035048148988410" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <Layout>
        <Hero />
        <LastNews />
        <Carousel />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
