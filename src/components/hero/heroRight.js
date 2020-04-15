/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const StyledHeroRight = styled.aside`
  grid-column: 9 / -1;
  grid-row: 1 / -1;
  height: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  z-index: -1;
`

const HeroRight = ({ children }) => {
  return (
    <StyledHeroRight sx={{ backgroundColor: "background.dark" }}>
      {children}
    </StyledHeroRight>
  )
}

export default HeroRight
