/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import ResumeImage from "../components/resume/resumeImage"
import styled from "@emotion/styled"
import ButtonDownload from "../components/buttons/buttonDownload"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const ResumeWrapper = styled.section`
  grid-column: 3 / 15;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 400px 1fr;
`

const ButtonWrapper = styled.div`
  position: sticky;
  top: 18%;
  grid-column: 1 / 3;
  grid-row: 1;
  justify-self: center;
  align-self: start;
  z-index: 2;
  line-height: 1;
  border-radius: 50%;
`

const Resume = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Isaac Pierce Resume" />
      <ButtonWrapper sx={{ pt: 4 }}>
        <ButtonDownload />
      </ButtonWrapper>
      <ResumeWrapper sx={{ my: 6 }}>
        <ResumeImage />
      </ResumeWrapper>
    </Layout>
  )
}

export default Resume
