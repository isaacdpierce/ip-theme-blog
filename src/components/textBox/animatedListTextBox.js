/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { getStart } from "../../helpers/helpers"

const StyledListTextBox = styled(motion.ul)`
  grid-column: ${props =>
    props.startAnimation === "left" ? "1 / 9" : "9 / -1"};
  grid-row: 1 / -1;
`

const ListTextBox = props => {
  const { children, align, color, startAnimation } = props
  return (
    <StyledListTextBox
      {...props}
      initial={{ opacity: 0, x: getStart(startAnimation, 500) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      sx={{
        textAlign: `${align}`,
        py: 5,
        px: 6,
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
