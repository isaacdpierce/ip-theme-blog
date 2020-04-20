/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { getStart } from "../../helpers/helpers"

const StyledTextBox = styled(motion.div)`
  grid-column: ${props => (props.side === "left" ? "1 / 9" : "9 / -1")};
  grid-row: 1 / -1;
`

const TextBox = props => {
  const { children, align, color, side } = props
  return (
    <StyledTextBox
      {...props}
      initial={{ opacity: 0, x: getStart(side, 500) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      sx={{
        textAlign: `${align}`,
        py: 6,
        pl: `${side === "left" ? 6 : 5}`,
        pr: `${side === "left" ? 5 : 6}`,
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
