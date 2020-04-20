/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useLayoutEffect } from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { isEven } from "../../helpers/helpers"

const StyledTimeline = styled.section`
  width: 90vw;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${props => props.rows}, auto);
  grid-row-gap: 50px;
`
const StyledTimelineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 12vw 1fr;
  grid-template-rows: auto;
  grid-column: 1/-1;
  grid-row: ${props => props.index + 1};
`

const StyledDate = styled(motion.div)`
  grid-column: ${props => (isEven(props.index) ? 1 : 3)};
  grid-row: 1;
  text-align: ${props => (isEven(props.index) ? "right" : "left")};
  transform: translateY(-30px);
  span {
    line-height: 1;
  }
`

const StyledLine = styled(motion.div)`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: center;
  z-index: 98;
  .line {
    width: 30%;
    height: 6px;
  }
`

const StyledDescription = styled(motion.div)`
  grid-column: ${props => (isEven(props.index) ? 3 : 1)};
  grid-row: 1;
  text-align: ${props => (isEven(props.index) ? "left" : "right")};
`

const Timeline = () => {
  const data = useStaticQuery(graphql`
    query TimelineQuery {
      allTimelineJson {
        edges {
          node {
            id
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
    <StyledTimeline
      sx={{ mb: 6, fontSize: [3, 4, 5] }}
      rows={timelines.length - 1}
    >
      {timelines.map(({ node: timeline }, index) => {
        const { date, description, title, id } = timeline

        return (
          <StyledTimelineItem
            key={id}
            index={index}
            sx={{
              fontFamily: "body",
              fontSize: 3,
            }}
          >
            <StyledDate
              key={id}
              index={index}
              sx={{
                color: `text.${isEven(index) ? "medium" : "light"}`,
              }}
              initial={{
                x: `${isEven(index) ? "100px" : "-100px"}`,
                y: "-18px",
                scaleY: 0,
                opacity: 0,
              }}
              animate={{ x: 0, y: 0, opacity: 1, scaleY: 1 }}
              transition={{
                type: "spring",
                mass: 2,
                delay: 2,
              }}
            >
              <h4
                sx={{
                  fontFamily: "heading",
                  letterSpacing: 1,
                  m: 0,
                }}
              >
                {date}
              </h4>
            </StyledDate>
            <StyledLine index={index} sx={{ pt: 2 }}>
              <motion.span
                className="line"
                sx={{ backgroundColor: "background.dark" }}
                initial={{ y: "-110vw" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  mass: 0.4,
                  delay: `${(timelines.length - index) / 3.5}`,
                }}
              ></motion.span>
              <motion.span
                className="line"
                sx={{ backgroundColor: "background.light" }}
                initial={{ y: "-110vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  mass: 0.4,
                  delay: `${(timelines.length - index) / 5}`,
                }}
              ></motion.span>
            </StyledLine>
            <StyledDescription
              index={index}
              sx={{
                color: `text.${isEven(index) ? "light" : "medium"}`,

                py: 1,
              }}
              initial={{
                x: `${isEven(index) ? "-126%" : "126%"}`,
                opacity: 0,
                scaleY: 0,
              }}
              animate={{ x: 0, opacity: 1, scaleY: 1 }}
              transition={{
                type: "spring",
                mass: 0.6,
                restDelta: 1,
                delay: 2.5,
              }}
            >
              <h5
                sx={{
                  fontFamily: "heading",
                  textTransform: "uppercase",
                  mb: 1,
                  letterSpacing: 1,
                }}
              >
                {title}
              </h5>

              <p
                sx={{
                  fontSize: 2,
                  mb: 0,
                }}
              >
                {description}
              </p>
            </StyledDescription>
          </StyledTimelineItem>
        )
      })}
    </StyledTimeline>
  )
}

export default Timeline
