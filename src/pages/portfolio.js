/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import HeroLeft from "../components/hero/heroLeft"
import HeroRight from "../components/hero/heroRight"
import PostsList from "../components/layout/posts-list-layout"

const StyledPortfolioSection = styled.section`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledPortfolioCard = styled.section``

const Portfolios = ({ data }) => {
  const { edges: projects } = data.allProjectsJson

  return (
    <Layout>
      <SEO title="The Portfolio of Isaac Pierce" />
      <HeroLeft />
      <HeroRight />
      <StyledPortfolioSection>
        {projects.map(({ node: project }, index) => {
          console.log(project.image)

          return (
            <StyledPortfolioCard key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="card__image" sx={{ mr: 3 }}>
                <Img
                  style={{ width: "100%" }}
                  fluid={project.image.childImageSharp.fluid}
                />
              </div>
            </StyledPortfolioCard>
          )
        })}
      </StyledPortfolioSection>
    </Layout>
  )
}

export default Portfolios

export const projectQuery = graphql`
  query projectIndex {
    allProjectsJson {
      edges {
        node {
          title
          description
          tech
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
