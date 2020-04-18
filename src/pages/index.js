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
        sx={{ py: 4 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Sign />
      </SignWrapper>

      <AnimatedTextBox align="right" color="dark" startAnimation="left">
        I build and maintain dynamic e-commerce experiences for <br></br>
        bricks and mortar retailers.
      </AnimatedTextBox>

      <AnimatedTextBox color="light" startAnimation="right">
        I build JAMstack <br></br>websites and apps <br></br>with Gatsby, React,
        Node, PostgresQL, and GraphQL.
      </AnimatedTextBox>
    </Layout>
  )
}

export default IndexPage
