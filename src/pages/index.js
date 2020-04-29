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
  display: flex;
  justify-content: center;
  transform: translateX(1px);
`

const SignContainer = styled.div`
  height: 30px;
  @media (max-width: 640px) {
    height: 15px;
  }
`

const HeadlineWrapper = styled.section`
  grid-column: 1 / -1;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 1fr 15vw 1fr;

  @media (max-width: 360px) {
    padding-left: 8px;
    padding-right: 8px;
  }
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
  const { title, description, keywords } = useSiteMetaData()

  return (
    <Layout path={location.pathname}>
      <SEO title={title} description={description} keywords={keywords} />

      <HeadlineWrapper sx={{ pb: [7, 9], px: 2 }}>
        <SignWrapper
          sx={{ pb: [4, 5] }}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", mass: 0.7, delay: 0.5 }}
        >
          <SignContainer>
            <Sign />
          </SignContainer>
        </SignWrapper>
        <TextBoxWrapper side="left">
          <TextBox sx={{ mb: [4, 5], fontSize: [3, 5, 6] }} side="left" animate>
            I build, scale and maintain dynamic e&#8209;commerce experiences for
            bricks and mortar retailers.
          </TextBox>
          <Button to="ecom-portfolio" side="left" animate>
            <motion.span
              sx={{ mb: 1, mr: [0, 2] }}
              animate={{ x: -7 }}
              transition={{
                yoyo: Infinity,
                duration: 0.5,
                delay: 1,
              }}
            >
              &#x21DA;
            </motion.span>
            E-commerce Portfolio
          </Button>
        </TextBoxWrapper>
        <TextBoxWrapper side="right">
          <TextBox
            sx={{ mb: [4, 5], fontSize: [3, 5, 6] }}
            side="right"
            animate
          >
            I build JAMstack websites and apps with React, Node, PostgresQL,
            GraphQL, and Gatsby.
          </TextBox>
          <Button to="dev-portfolio" side="right" animate>
            Developer Portfolio
            <motion.span
              sx={{ mb: 1, ml: [0, 2] }}
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
    </Layout>
  )
}

export default IndexPage
