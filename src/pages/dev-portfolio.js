/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import DisplayCard from "../components/cards/animatedDisplayCard"
import Timeline from "../components/timeline/timeline"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"

const StyledPortfolioSection = styled.section`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledPortfolioCard = styled.section``

const Portfolios = ({ data, location }) => {
  const { edges: projects } = data.allProjectsJson

  return (
    <Layout path={location.pathname}>
      <SEO title="The Portfolio of Isaac Pierce" />
      <StyledPortfolioSection sx={{ py: 6 }}>
        <Timeline />
        {projects.map(({ node: project }, index) => {
          const {
            id,
            title,
            description,
            date,
            link,
            tech,
            url,
            code,
          } = project
          const image = project.image.childImageSharp.fluid

          return (
            <DisplayCard
              key={id}
              title={title}
              description={description}
              image={image}
              index={index}
              date={date}
              link={link}
              excerpt={tech}
              url={url}
              code={code}
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
          id
          title
          description
          tech
          date
          url
          code {
            source
            url
          }
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
