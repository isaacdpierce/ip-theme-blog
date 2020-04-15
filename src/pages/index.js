/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout/layout"
import HeroLeft from "../components/hero/heroLeft"
import HeroRight from "../components/hero/heroRight"
import SEO from "../components/seo"
import useSiteMetaData from "../hooks/useSiteMetadata"
import Sign from "../components/hero/sign"
import TextBox from "../components/textBox/headingTextBox"

const SignWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  transform: translateX(1px);
  display: flex;
`

const IndexPage = () => {
  const { title, siteUrl, description, keywords } = useSiteMetaData()

  return (
    <Layout>
      <SEO title={title} description={description} keywords={keywords} />
      <SignWrapper sx={{ py: 4 }}>
        <Sign />
      </SignWrapper>

      <HeroLeft>
        <TextBox align="right" color="dark">
          I build and maintain dynamic e-commerce experiences for <br></br>
          bricks and mortar retailers.
        </TextBox>
      </HeroLeft>
      <HeroRight>
        <TextBox color="light">
          I build JAMstack <br></br>websites and apps <br></br>with Gatsby,
          React, Node, PostgresQL, and GraphQL.
        </TextBox>
      </HeroRight>
    </Layout>
  )
}

export default IndexPage
