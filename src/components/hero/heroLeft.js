/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const StyledHeroLeft = styled.aside`
  grid-column: 1 / 9;
  grid-row: 1 / -1;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: flex-end;
  z-index: -1;
`

const HeroLeft = ({ children }) => {
  return (
    <StyledHeroLeft sx={{ backgroundColor: "background.light" }}>
      {children}
    </StyledHeroLeft>
  )
}

export default HeroLeft
