/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const StyledHero = styled.section`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  min-height: calc(100vh - 70px);
  display: flex;
  z-index: 1;
  box-shadow: 0 1px 2px 2px #00000025;
  transform: translate3d(
    0,
    0,
    0
  ); /* this makes the sticky footer work on Safari*/
`

const StyledLeft = styled.div`
  width: 50vw;
`

const StyledRight = styled.div`
  width: 50vw;
`

const Hero = () => {
  return (
    <StyledHero>
      <StyledLeft sx={{ backgroundColor: "background.light" }} />
      <StyledRight sx={{ backgroundColor: "background.dark" }} />
    </StyledHero>
  )
}

export default Hero
