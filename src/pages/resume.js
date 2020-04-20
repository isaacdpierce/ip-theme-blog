import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import resume from "../images/resume.pdf"
import ResumeImage from "../components/resume/resumeImage"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const StyledImage = styled.div`
  display: flex;
  width: 600px;
  flex-shrink: 0;
`

const Resume = () => {
  return (
    <Layout>
      <SEO title="Isaac Pierce Resume" />
      <ResumeImage />
    </Layout>
  )
}

export default Resume
