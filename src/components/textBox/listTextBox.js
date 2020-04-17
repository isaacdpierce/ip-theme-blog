/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { getStart } from "../../helpers/helpers"

const ListTextBox = ({ children, align, color, startAnimation }) => {
  return (
    <motion.ul
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
    </motion.ul>
  )
}

export default ListTextBox
