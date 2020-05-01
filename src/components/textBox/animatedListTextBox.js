/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"

const StyledListTextBox = styled(motion.ul)`
  grid-column: 1 / -1;
  grid-row-gap: 50px;
  justify-self: center;
  max-width: 60vw;
  text-align: left;
  box-shadow: 0 0 6px #00000050;
  border-radius: 3px;
  @media (max-width: 650px) {
    min-width: 90vw;
  }
`

const ListTextBox = ({ children, side }) => {
  return (
    <StyledListTextBox
      side={side}
      initial={{
        color: "transparent",
        textShadow: `0 0 15px ${side === "left" ? "black" : "white"}`,
      }}
      animate={{
        textShadow: `0 0 0px ${side === "left" ? "black" : "white"}`,
      }}
      transition={{
        duration: 1,
      }}
      sx={{
        ml: 0,
        py: [4, 5],
        px: [4, 5],
        fontSize: [2, 3],
        letterSpacing: "body",
        backgroundColor: `${side === "left" ? "white" : "darkGrey"}`,
        lineHeight: 1.1,
      }}
    >
      {children}
    </StyledListTextBox>
  )
}

export default ListTextBox
