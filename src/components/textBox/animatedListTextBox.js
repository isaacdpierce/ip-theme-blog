/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"

const StyledListTextBox = styled(motion.ul)`
  grid-column: ${({ side }) => (side === "left" ? 1 : 3)};
  justify-self: ${({ side }) => (side === "left" ? "end" : "start")};
  max-width: 35vw;
`

const ListTextBox = ({ children, side }) => {
  return (
    <StyledListTextBox
      side={side}
      initial={{
        x: `${side === "left" ? "50vw" : "-50vw"}`,

        color: "transparent",
        textShadow: `0 0 10px ${side === "left" ? "black" : "white"}`,
      }}
      animate={{
        x: 0,
        textShadow: `0 0 0px ${side === "left" ? "black" : "white"}`,
      }}
      transition={{
        type: "spring",
        mass: 0.9,
        damping: 15,
        delay: 0.2,
      }}
      sx={{
        textAlign: `${side === "left" ? "right" : "left"}`,
        m: 0,
        py: 6,
        fontSize: 3,
        letterSpacing: "body",
        color: `text.${side === "left" ? "medium" : "light"}`,
        lineHeight: 1.3,
      }}
    >
      {children}
    </StyledListTextBox>
  )
}

export default ListTextBox
