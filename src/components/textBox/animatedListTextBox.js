/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { getStart } from "../../helpers/helpers"

const StyledListTextBox = styled(motion.ul)`
  grid-column: ${props => (props.side === "left" ? 1 : 3)};
  justify-self: ${props => (props.side === "left" ? "end" : "start")};
  max-width: 35vw;
`

const ListTextBox = props => {
  const { children, align, color, side } = props
  return (
    <StyledListTextBox
      {...props}
      initial={{ opacity: 0, x: getStart(side, 500) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      sx={{
        textAlign: `${side === "left" ? "right" : "left"}`,
        m: 0,
        fontSize: 3,
        letterSpacing: "body",
        color: `text.${color}`,
        lineHeight: 1.3,
      }}
    >
      {children}
    </StyledListTextBox>
  )
}

export default ListTextBox
