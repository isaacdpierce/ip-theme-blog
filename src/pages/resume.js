/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css, keyframes } from "@emotion/core"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import resume from "../images/resume.pdf"
import ResumeImage from "../components/resume/resumeImage"
import styled from "@emotion/styled"
import DownLoadSVG from "../components/buttons/downloadSVG"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// Had to use keyframes because motion cancels transform translate.
const rotate = keyframes`
 0% {
   transform: rotate(0deg)
 }
 100% {
   transform: rotate(360deg)
 }
`

const ResumeWrapper = styled.section`
  grid-column: 3 / 15;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 400px 1fr;
`

const LinkWrapper = styled.div`
  will-change: transform;
  position: sticky;
  top: 25%;
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  justify-self: start;
  align-self: start;
  z-index: 2;
  line-height: 1;
  transform: translate(-75px, -50px);
  border-radius: 50%;
  a {
    display: block;
  }
`

const Resume = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Isaac Pierce Resume" />
      <ResumeWrapper sx={{ mb: 6 }}>
        <LinkWrapper>
          <a
            href={resume}
            download
            css={css`
              animation: ${rotate} 12s infinite linear;
            `}
          >
            <DownLoadSVG />
          </a>
        </LinkWrapper>
        <ResumeImage />
      </ResumeWrapper>
    </Layout>
  )
}

export default Resume
