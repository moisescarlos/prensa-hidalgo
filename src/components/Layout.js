import * as React from "react"
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import Footer from "./Footer"
import Header from './Header'
import '../styles/global.css'

export default function Layout({ children }) {
  const { title, description } = useSiteMetadata()
  return (
    <div className="flex flex-col content-between justify-between min-h-screen">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/prensa.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/circulo.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/circulo.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/prensalogo.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/prensa.jpg`}
        />
      </Helmet>
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}
