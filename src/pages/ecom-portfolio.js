/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { graphql } from "gatsby"

import IllustrationOne from "../components/illustrations/illustrationOne"
import IllustrationTwo from "../components/illustrations/illustrationTwo"
import IllustrationThree from "../components/illustrations/illustrationThree"
import SquareBox from "../components/cards/squareBox"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"

const StyledPortfolioSection = styled.section`
  grid-column: ${props => (props.side === "left" ? "1 / 9" : "9 / -1")};
  grid-row: ${props => props.row + 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    border-radius: 6px;
  }

  span {
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: ${props =>
      props.side === "left" ? props.row * 2 + 1 : (props.row + 1) * 2};
  }
`

const StyledPortfolioCard = styled.section``

const Portfolios = ({ data, location }) => {
  const { nodes: copy } = data.allCommerceCopyJson

  const textBoxes = copy.map((section, index) => {
    return (
      <StyledPortfolioSection
        sx={{
          py: [5, 6],
        }}
        side="left"
        row={index}
      >
        <SquareBox>
          <div sx={{ p: [2, 3, 4] }}>
            <h2>{section.title}</h2>
            {section.list.map(item => {
              return <li>{item}</li>
            })}
          </div>
        </SquareBox>
      </StyledPortfolioSection>
    )
  })

  return (
    <Layout path={location.pathname}>
      <SEO title="The Portfolio of Isaac Pierce" />
      {textBoxes}
      <StyledPortfolioSection row={0}>
        <SquareBox>
          <IllustrationOne />
        </SquareBox>
      </StyledPortfolioSection>
      <StyledPortfolioSection row={1}>
        <SquareBox>
          <IllustrationTwo />
        </SquareBox>
      </StyledPortfolioSection>
      <StyledPortfolioSection row={2} sx={{ mb: 6 }}>
        <SquareBox>
          <IllustrationThree />
        </SquareBox>
      </StyledPortfolioSection>
    </Layout>
  )
}

export default Portfolios

export const eCommerceQuery = graphql`
  query eCommerceIndex {
    allCommerceCopyJson {
      nodes {
        list
        title
        id
      }
    }
  }
`
