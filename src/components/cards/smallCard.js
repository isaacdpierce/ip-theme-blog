/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import styled from "@emotion/styled"

const StyledCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  max-width: 95vw;
  width: 450px;
  border-radius: 3px;
  border-top: 1px solid #444;
  box-shadow: 0 1px 1px 1px #00000025;
`

const Card = ({ children }) => {
  return (
    <StyledCard
      sx={{
        backgroundColor: "background.dark",
        color: "text.light",
        p: [2, 3, 4],
        fontSize: 1,
        lineHeight: "card",
      }}
    >
      {children}
    </StyledCard>
  )
}

export default Card
