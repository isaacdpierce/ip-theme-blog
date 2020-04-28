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
  @media (max-width: 700px) {
    grid-column: 2 / 16;
  }
  @media (max-width: 400px) {
    grid-column: 1 / 17;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 4%;
  right: 10%;
  justify-self: center;
  align-self: start;
  width: 100px;
  z-index: 2;
  line-height: 0; /* Keeps the div from being deformed */
  border-radius: 50%;
  @media (max-width: 700px) {
    width: 70px;
    top: 2%;
    right: 5%;
  }
  @media (max-width: 400px) {
    width: 60px;
  }
`

const Resume = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Isaac Pierce Resume" />
      <ButtonWrapper sx={{ p: 1, backgroundColor: "links.light" }}>
        <ButtonDownload />
      </ButtonWrapper>
      <ResumeWrapper sx={{ my: [4, 5, 6] }}>
        <ResumeImage />
      </ResumeWrapper>
    </Layout>
  )
}

export default Resume
