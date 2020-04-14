/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"

const PageWrapper = styled.section`
  border: 1px solid peru;
  margin: 0;
  padding: 0;
`
const StyledPostSection = styled.section`
  grid-column: 4 / 14;
  min-height: calc(100vh - 100px);
`

const StyledPostList = styled.ul`
  display: flex;
  flex-direction: column;
`

const StyledPostListItem = styled.li`
  display: flex;
  border-radius: 3px;
  box-shadow: 0px 9px 9px 9px #00000025;
  border-top: 1px solid #fff;
`

const ImageWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-shrink: 0;
`

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <PageWrapper sx={{ backgroundColor: "background.light" }}>
      <Layout>
        <StyledPostSection sx={{ my: 6 }}>
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
                      fluid={
                        post.frontmatter.featuredImage.childImageSharp.fluid
                      }
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
    </PageWrapper>
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
