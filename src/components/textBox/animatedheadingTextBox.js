/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { getStart } from "../../helpers/helpers"

const StyledTextBox = styled(motion.div)`
  grid-column: ${props => (props.side === "left" ? 1 : 3)};
  justify-self: ${props => (props.side === "left" ? "end" : "start")};
`

const TextBox = props => {
  const { children, color, side } = props
  return (
    <StyledTextBox
      {...props}
      initial={{ opacity: 0, x: getStart(side, 500) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      sx={{
        textAlign: `${side === "left" ? "right" : "left"}`,
        fontSize: 6,
        letterSpacing: "heading",
        color: `text.${color}`,
        lineHeight: 1.3,
      }}
    >
      {children}
    </StyledTextBox>
  )
}

export default TextBox
