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
        // x: `${side === "left" ? "100vw" : "-100vw"}`,
        color: "transparent",
        textShadow: `0 0 15px ${side === "left" ? "black" : "white"}`,
      }}
      animate={{
        x: 0,
        textShadow: `0 0 0px ${side === "left" ? "black" : "white"}`,
      }}
      transition={{
        type: "spring",
        mass: 0.9,
        damping: 15,
      }}
      sx={{
        // textAlign: `${side === "left" ? "left" : "center"}`,
        mb: 4,
        ml: 0,
        py: [5, 6],
        px: [4, 5],
        fontSize: [2, 3],
        letterSpacing: "body",
        backgroundColor: `${side === "left" ? "white" : "darkGrey"}`,
        lineHeight: 1.3,
      }}
    >
      {children}
    </StyledListTextBox>
  )
}

export default ListTextBox
