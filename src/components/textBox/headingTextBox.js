/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { getStart } from "../../helpers/helpers"

const TextBox = ({ children, align, color, startAnimation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: getStart(startAnimation, 500) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      sx={{
        textAlign: `${align}`,
        py: 6,
        px: 6,
        fontSize: 7,
        letterSpacing: "heading",
        color: `text.${color}`,
        lineHeight: 1.3,
      }}
    >
      {children}
    </motion.div>
  )
}

export default TextBox
