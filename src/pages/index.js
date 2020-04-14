/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"
import useSiteMetaData from "../hooks/useSiteMetadata"

const TextBoxWrapper = styled.section`
  grid-column: 2 / 16;
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`

const StyledTextBox = styled.aside`
  width: 40%;
  border: 1px solid black;
`
const StyledRightTextBox = styled.aside`
  width: 490px;
  border: 1px solid black;
`

const IndexPage = () => {
  const { title, siteUrl, description, keywords } = useSiteMetaData()
  return (
    <Layout>
      <SEO title={title} description={description} keywords={keywords} />
      <TextBoxWrapper sx={{ py: 6 }}>
        <StyledTextBox>Hello</StyledTextBox>
        <StyledTextBox>Hello</StyledTextBox>
      </TextBoxWrapper>
      <Hero />
    </Layout>
  )
}

export default IndexPage
