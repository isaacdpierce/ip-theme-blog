/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import DisplayCard from "../components/cards/animatedDisplayCard"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"

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
      <StyledPortfolioSection>
        {projects.map(({ node: project }, index) => {
          const { title, description, date, link, tech } = project
          const image = project.image.childImageSharp.fluid

          return (
            <DisplayCard
              title={title}
              description={description}
              image={image}
              index={index}
              date={date}
              link={link}
              excerpt={tech}
            />
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
          date
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
