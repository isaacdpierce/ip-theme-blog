/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Header from "../header/header"
import Footer from "../footer/footer"
import useSiteMetaData from "../../hooks/useSiteMetadata"
import GlobalStyles from "../globalStyles/globalStyles"

import Hero from "../hero/hero"

const LayoutGrid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 100px 1fr;
`

const MainGrid = styled.main`
  grid-column: 1 / -1;
  grid-row: 2;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 90px 1fr;
`

const Layout = ({ children }) => {
  const { title, siteUrl } = useSiteMetaData()

  return (
    <>
      <LayoutGrid>
        <GlobalStyles />
        <Header siteTitle={title} />
        <Hero />
        <MainGrid>{children}</MainGrid>
      </LayoutGrid>
      <Footer siteTitle={title} siteUrl={siteUrl} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
