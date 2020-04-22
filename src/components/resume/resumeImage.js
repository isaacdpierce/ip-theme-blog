import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const StyledImage = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  width: 100%;
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
    <StyledImage>
      <Img style={{ width: "100%" }} fluid={data.file.childImageSharp.fluid} />
    </StyledImage>
  )
}

export default ResumeImage
