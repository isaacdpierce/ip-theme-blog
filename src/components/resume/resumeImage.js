import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const StyledImage = styled.div`
  display: flex;
  width: 600px;
  flex-shrink: 0;
`

const ResumeImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "resume.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data.file)

  return (
    <>
      <StyledImage sx={{ mr: 4 }}>
        HELLO
        <Img
          style={{ width: "100%" }}
          fluid={data.file.childImageSharp.fluid}
        />
      </StyledImage>
    </>
  )
}

export default ResumeImage
