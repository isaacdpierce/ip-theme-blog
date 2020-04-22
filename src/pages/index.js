/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import useSiteMetaData from "../hooks/useSiteMetadata"
import Sign from "../components/hero/sign"
import TextBox from "../components/textBox/animatedheadingTextBox"
import { motion } from "framer-motion"
import Button from "../components/buttons/buttonLarge"

const SignWrapper = styled(motion.div)`
  grid-column: 1 / -1;
  transform: translateX(1px);
  height: 20px;
`

const HeadlineWrapper = styled.section`
  grid-column: 1 / -1;
  display: grid;
  align-content: start;
  grid-row-gap: 50px;
  grid-template-columns: 1fr 15vw 1fr;
  min-height: calc(100vh - 70px);
`

const TextBoxWrapper = styled(motion.div)`
  max-width: 330px;
  grid-column: ${props => (props.side === "left" ? 1 : 3)};
  justify-self: ${props => (props.side === "left" ? "end" : "start")};
  text-align: ${props => (props.side === "left" ? "right" : "left")};
  span {
    display: inline-block;
  }
`

const IndexPage = ({ location }) => {
  const { title, siteUrl, description, keywords } = useSiteMetaData()

  return (
    <Layout path={location.pathname}>
      <SEO title={title} description={description} keywords={keywords} />

      <HeadlineWrapper>
        <SignWrapper
          sx={{ py: [1, 0] }}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", mass: 0.7, delay: 0.5 }}
        >
          <Sign />
        </SignWrapper>
        <TextBoxWrapper side="left">
          <TextBox side="left" animate>
            I build, scale and maintain dynamic e&#8209;commerce experiences for
            bricks and mortar retailers.
          </TextBox>
          <Button to="ecomPortfolio" side="left" animate>
            <motion.span
              sx={{ mb: 1, mr: 1 }}
              animate={{ x: -7 }}
              transition={{
                yoyo: Infinity,
                duration: 0.5,
                delay: 1,
              }}
            >
              &#x21DA;
            </motion.span>{" "}
            E-commerce Portfolio
          </Button>
        </TextBoxWrapper>
        <TextBoxWrapper side="right">
          <TextBox side="right" animate>
            I build JAMstack websites and apps with React, Node, PostgresQL,
            GraphQL, and Gatsby.
          </TextBox>
          <Button to="devPortfolio" side="right" animate>
            Developer Portfolio{" "}
            <motion.span
              sx={{ mb: 1, ml: 1 }}
              animate={{ x: 7 }}
              transition={{
                yoyo: Infinity,
                duration: 0.5,
                delay: 1,
              }}
            >
              &#x21DB;
            </motion.span>
          </Button>
        </TextBoxWrapper>
      </HeadlineWrapper>

      {/* <HeadlineWrapper>
        <AnimatedTextBox color="dark" side="left">
          I build and maint######ain <br></br>dynamic e-commerce experiences{" "}
          <br></br>
          for bricks and mortar <br></br>retailers.
        </AnimatedTextBox>

        <AnimatedTextBox color="light" side="right">
          I build JAMstacXXXXXXXk <br></br>websites and apps with <br></br>
          React, Node,
          <br></br>PostgresQL, GraphQL, <br></br>and Gatsby.
        </AnimatedTextBox>
      </HeadlineWrapper> */}
    </Layout>
  )
}

export default IndexPage
