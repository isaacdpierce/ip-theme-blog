/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import useSiteMetaData from "../hooks/useSiteMetadata"
import Sign from "../components/hero/sign"
import AnimatedTextBox from "../components/textBox/animatedheadingTextBox"
import { motion } from "framer-motion"

const SignWrapper = styled(motion.div)`
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

      <SignWrapper
        sx={{ py: 5 }}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", mass: 0.7, duration: 1, delay: 1 }}
      >
        <Sign height="20px" />
      </SignWrapper>

      <AnimatedTextBox align="right" color="dark" side="left">
        I build and maintain <br></br>dynamic e-commerce experiences <br></br>
        for bricks and mortar <br></br>retailers.
      </AnimatedTextBox>

      <AnimatedTextBox color="light" side="right">
        I build JAMstack <br></br>websites and apps with <br></br>React, Node,
        <br></br>PostgresQL, GraphQL, <br></br>and Gatsby.
      </AnimatedTextBox>
    </Layout>
  )
}

export default IndexPage
