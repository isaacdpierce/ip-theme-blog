/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { getStart } from "../../helpers/helpers"

const TextBox = props => {
  const { children, side, animate } = props

  return (
    <motion.p
      {...props}
      initial={animate && { opacity: 0, x: getStart(side, 500) }}
      animate={animate && { opacity: 1, x: 0 }}
      transition={animate && { ease: "easeOut", duration: 1 }}
      sx={{
        fontSize: [4, 5, 6],
        letterSpacing: "heading",
        color: `text.${props.side === "left" ? "medium" : "light"}`,
        lineHeight: 1.3,
      }}
    >
      {children}
    </motion.p>
  )
}

export default TextBox
