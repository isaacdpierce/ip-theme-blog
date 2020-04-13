import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import useSiteMetaData from "../hooks/useSiteMetadata"
import "./layout.css"

const Layout = ({ children }) => {
  const { title, siteUrl } = useSiteMetaData()

  return (
    <>
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer siteTitle={title} siteUrl={siteUrl} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
