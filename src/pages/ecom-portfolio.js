/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import DisplayCard from "../components/cards/animatedDisplayCard"
import Timeline from "../components/timeline/timeline"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"

const StyledPortfolioSection = styled.section`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledPortfolioCard = styled.section``

const Portfolios = ({ location }) => {
  // const Portfolios = ({ data, location }) => {
  // const { edges: projects } = data.allProjectsJson

  return (
    <Layout path={location.pathname}>
      <SEO title="The Portfolio of Isaac Pierce" />
      <StyledPortfolioSection>Hello</StyledPortfolioSection>
    </Layout>
  )
}

export default Portfolios
