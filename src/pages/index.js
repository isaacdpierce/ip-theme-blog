import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useSiteMetaData from "../hooks/useSiteMetadata"

const StyledNavLink = styled(Link)`
  padding: 0 20px;
`

const IndexPage = () => {
  const { title, siteUrl, description, keywords } = useSiteMetaData()
  return (
    <Layout>
      <SEO title={title} description={description} keywords={keywords} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <StyledNavLink to="/about/">about</StyledNavLink>
      <StyledNavLink to="/portfolios/">portfolios</StyledNavLink>
      <StyledNavLink to="/resume/">resume</StyledNavLink>
      <StyledNavLink to="/contact/">contact</StyledNavLink>
    </Layout>
  )
}

export default IndexPage
