/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const StyledSquareBox = styled(motion.div)`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0 0 6px #00000050;
  @media (max-width: 600px) {
    height: 90vw;
    width: 90vw;
  }
`
const SquareBox = ({ children, animated = true }) => {
  return (
    <StyledSquareBox
      initial={animated && { scale: 0 }}
      animate={animated && { scale: 1 }}
      transition={
        animated && {
          type: "spring",
          mass: 0.9,
        }
      }
      sx={{
        color: "text.light",
        backgroundColor: "background.dark",

        h2: {
          fontSize: [3, 4],
          textTransform: "uppercase",
          letterSpacing: 1,
        },
        li: {
          fontSize: [1, 2],
          mb: [1, 2],
        },
      }}
    >
      {children}
    </StyledSquareBox>
  )
}

export default SquareBox
