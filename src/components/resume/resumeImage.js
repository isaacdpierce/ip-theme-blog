import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const ResumeWrapper = styled.section`
  grid-column: 1 / -1;
  grid-row-gap: 200px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
`

const StyledImage = styled.div`
  display: flex;
  width: 70vw;
  flex-shrink: 0;
`

const ResumeImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ResumeWrapper>
      <StyledImage>
        <Img
          style={{ width: "100%" }}
          fluid={data.file.childImageSharp.fluid}
        />
      </StyledImage>
    </ResumeWrapper>
  )
}

export default ResumeImage
