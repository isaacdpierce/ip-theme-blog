/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import HeroLeft from "../components/hero/heroLeft"
import HeroRight from "../components/hero/heroRight"

const StyledPostSection = styled.section`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
`

const StyledPostList = styled.ul`
  width: 60vw;
  display: flex;
  flex-direction: column;
`

const StyledPostListItem = styled.li`
  display: flex;
  border-radius: 3px;
  box-shadow: 0px 3px 3px 3px #00000025;
  border-top: 1px solid #555;
`

const ImageWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-shrink: 0;
`

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <HeroLeft />
      <HeroRight />
      <StyledPostSection sx={{ my: 1 }}>
        <StyledPostList>
          {posts.map(({ node: post }) => {
            return (
              <StyledPostListItem
                key={post.frontmatter.title}
                sx={{
                  backgroundColor: "background.dark",
                  color: "text.light",
                  p: 4,
                  mb: 4,
                }}
              >
                <ImageWrapper sx={{ mr: 3 }}>
                  <Img
                    style={{ width: "100%" }}
                    fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </ImageWrapper>
                <div
                  sx={{
                    h3: {
                      color: "white",
                      m: 0,
                    },
                    span: {
                      color: "primary",
                    },
                  }}
                >
                  <Link to={post.fields.slug}>
                    <h3>{post.frontmatter.title}</h3>
                    <span>{post.frontmatter.date}</span>
                  </Link>
                  <p>{post.excerpt}</p>
                </div>
              </StyledPostListItem>
            )
          })}
        </StyledPostList>
      </StyledPostSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
