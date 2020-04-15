/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"
import useSiteMetaData from "../hooks/useSiteMetadata"
import Sign from "../components/hero/sign"

const SignWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  transform: translateX(1px);
  display: flex;
`

const TextBoxWrapper = styled.section`
  grid-column: 2 / 16;
  grid-row: 2;
  display: flex;
  justify-content: space-between;
`

const StyledTextBox = styled.aside`
  width: 45%;
`

const IndexPage = () => {
  const { title, siteUrl, description, keywords } = useSiteMetaData()
  return (
    <Layout>
      <SEO title={title} description={description} keywords={keywords} />
      <Hero />
      <SignWrapper sx={{ py: 4 }}>
        <Sign />
      </SignWrapper>
      <TextBoxWrapper sx={{ py: 5, fontSize: 7, letterSpacing: "heading" }}>
        <StyledTextBox sx={{ textAlign: "right" }}>
          I build and maintain dynamic e-commerce experiences <br></br>for
          bricks and mortar retailers.
        </StyledTextBox>
        <StyledTextBox sx={{ color: "text.light" }}>
          I build JAMstack websites and apps with Gatsby, React, Node,
          PostgresQL, and GraphQL.
        </StyledTextBox>
      </TextBoxWrapper>
    </Layout>
  )
}

export default IndexPage
