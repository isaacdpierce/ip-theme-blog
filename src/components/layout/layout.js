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
  grid-template-rows: auto 1fr;
`

const MainGrid = styled.main`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 2;
  width: 100vw;
  display: grid;
  z-index: 3;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 1fr;
  transform: translate3d(
    0,
    0,
    0
  ); /* this makes the sticky footer work on Safari*/
`

const Layout = ({ children, path }) => {
  const { title, siteUrl } = useSiteMetaData()

  return (
    <>
      <LayoutGrid>
        <GlobalStyles />
        <Header path={path} />
        <Hero />
        <MainGrid>{children}</MainGrid>
        <Footer siteTitle={title} siteUrl={siteUrl} />
      </LayoutGrid>
      <div id="contact"></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
