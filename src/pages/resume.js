/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css, keyframes } from "@emotion/core"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import ResumeImage from "../components/resume/resumeImage"
import styled from "@emotion/styled"
import ButtonDownload from "../components/buttons/buttonDownload"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const ResumeWrapper = styled.section`
  grid-column: 3 / 15;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 400px 1fr;
`

const ButtonWrapper = styled.div`
  will-change: transform;
  position: sticky;
  top: 25%;
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  justify-self: start;
  align-self: start;
  z-index: 2;
  line-height: 1;
  transform: translate(-125px, -50px);
  border-radius: 50%;
`

const Resume = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Isaac Pierce Resume" />
      <ResumeWrapper sx={{ mb: 6 }}>
        <ButtonWrapper>
          <ButtonDownload />
        </ButtonWrapper>
        <ResumeImage />
      </ResumeWrapper>
    </Layout>
  )
}

export default Resume
