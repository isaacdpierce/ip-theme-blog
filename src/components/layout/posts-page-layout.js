/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import SEO from "../seo"
import Layout from "./layout"

const PageWrapper = styled.section`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PostWrapper = styled.div`
  max-width: 60vw;
  transform: translateY(-300px);
`

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx }, location }) {
  let featuredImgFluid = mdx.frontmatter.featuredImage
    ? mdx.frontmatter.featuredImage.childImageSharp.fluid
    : null

  let { title, date, description } = mdx.frontmatter

  return (
    <Layout>
      <PageWrapper sx={{ backgroundColor: "white" }}>
        <SEO
          title={title}
          image={featuredImgFluid}
          description={description}
          pathname={location.pathname}
        />
        <div>
          <Img style={{ width: "100vw" }} fluid={featuredImgFluid} />
        </div>
        <PostWrapper sx={{ backgroundColor: "primary", py: 5, px: 6 }}>
          <h1 sx={{ m: 0 }}>{title}</h1>
          <span
            sx={{
              fontSize: 0,
              color: "text.medium",
              textTransform: "uppercase",
            }}
          >
            {date}
          </span>

          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </PostWrapper>
      </PageWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        date
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
