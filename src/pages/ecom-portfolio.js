/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import DisplayCard from "../components/cards/animatedDisplayCard"
import Timeline from "../components/timeline/timeline"
import IllustrationOne from "../components/illustrations/illustrationOne"
import IllustrationTwo from "../components/illustrations/illustrationTwo"
import IllustrationThree from "../components/illustrations/illustrationThree"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"

const StyledPortfolioSection = styled.section`
  grid-column: ${props => (props.side === "left" ? "1 / 9" : "9 / -1")};
  grid-row: ${props => props.index + 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);

  svg {
    border-radius: 6px;
  }

  span {
    white-space: nowrap;
  }
`

const SquareTextBox = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 6px;
`

const StyledPortfolioCard = styled.section``

const Portfolios = ({ data, location }) => {
  const { nodes: copy } = data.allCommerceCopyJson

  console.log(copy)

  const textBoxes = copy.map((section, index) => {
    return (
      <StyledPortfolioSection side="left" index={index}>
        <SquareTextBox
          sx={{
            color: "text.light",
            backgroundColor: "background.dark",
            p: 4,
            h2: {
              fontSize: 4,
              textTransform: "uppercase",
              letterSpacing: 1,
            },
          }}
        >
          <h2>{section.title}</h2>
          {section.list.map(item => {
            return <li>{item}</li>
          })}
        </SquareTextBox>
      </StyledPortfolioSection>
    )
  })

  return (
    <Layout path={location.pathname}>
      <SEO title="The Portfolio of Isaac Pierce" />
      {textBoxes}
      <StyledPortfolioSection index={0}>
        <IllustrationOne />
      </StyledPortfolioSection>
      <StyledPortfolioSection index={1}>
        <IllustrationTwo />
      </StyledPortfolioSection>
      <StyledPortfolioSection index={2}>
        <IllustrationThree />
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
