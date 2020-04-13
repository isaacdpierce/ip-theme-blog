/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../seo"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx }, location }) {
  let featuredImgFluid = mdx.frontmatter.featuredImage
    ? mdx.frontmatter.featuredImage.childImageSharp.fluid
    : null

  let { title, date, description } = mdx.frontmatter

  return (
    <div sx={{ fontSize: 2, color: "text.dark" }}>
      <SEO
        title={title}
        image={featuredImgFluid}
        description={description}
        pathname={location.pathname}
      />
      <Img style={{ width: "100vw" }} fluid={featuredImgFluid} />
      <h1>{title}</h1>
      <span
        sx={{ fontSize: 0, color: "text.medium", textTransform: "uppercase" }}
      >
        {date}
      </span>

      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
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
