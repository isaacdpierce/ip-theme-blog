/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { isIndexEven } from "../../helpers/helpers"

const StyledTimeline = styled.section`
  width: 81vw;
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
`
const StyledDate = styled.div`
  grid-column: 1;
  text-align: right;
`

const StyledLine = styled.div`
  grid-column: 2;

  display: flex;
  justify-content: center;

  .line {
    width: 70px;
    height: 6px;
  }
`

const StyledDescription = styled.div`
  grid-column: 3;
  text-align: left;
`

const Timeline = () => {
  const data = useStaticQuery(graphql`
    query TimelineQuery {
      allTimelineJson {
        edges {
          node {
            date
            description
            title
          }
        }
      }
    }
  `)

  const { edges: timelines } = data.allTimelineJson

  return (
    <StyledTimeline sx={{ mb: 6, fontSize: [3, 4, 5] }}>
      {timelines.map(({ node: timeline }, index) => {
        const { date, description, title } = timeline
        return (
          <>
            <StyledDate>{date}</StyledDate>
            <StyledLine sx={{ pt: 3 }}>
              <span
                className="line"
                sx={{ backgroundColor: "background.dark" }}
              ></span>
              <span
                className="line"
                sx={{ backgroundColor: "background.light" }}
              ></span>
            </StyledLine>
            <StyledDescription>
              <span>{title}</span>
              <span>{description}</span>
            </StyledDescription>
          </>
        )
      })}
    </StyledTimeline>
  )
}

export default Timeline
