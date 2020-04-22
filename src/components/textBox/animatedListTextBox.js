/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { getStart } from "../../helpers/helpers"

const StyledListTextBox = styled(motion.ul)`
  grid-column: ${({ side }) => (side === "left" ? 1 : 3)};
  justify-self: ${({ side }) => (side === "left" ? "end" : "start")};
  max-width: 35vw;
`

const ListTextBox = ({ children, side }) => {
  return (
    <StyledListTextBox
      side={side}
      initial={{ x: "-100vw", y: "100vw", scale: 24 }}
      animate={{ x: 0, y: 0, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 3, delay: 0.2 }}
      sx={{
        textAlign: `${side === "left" ? "right" : "left"}`,
        m: 0,
        fontSize: 3,
        letterSpacing: "body",
        color: `text.${side === "left" ? "dark" : "light"}`,
        lineHeight: 1.3,
      }}
    >
      {children}
    </StyledListTextBox>
  )
}

export default ListTextBox
