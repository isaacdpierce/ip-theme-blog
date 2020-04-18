/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const StyledHero = styled.section`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  height: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  z-index: -1;
`

const StyledLeft = styled.div`
  width: 50vw;
  height: 100%;
`

const StyledRight = styled.div`
  width: 50vw;
  height: 100%;
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
