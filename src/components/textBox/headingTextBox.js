/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const TextBox = ({ children, align, color }) => {
  return (
    <div
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
    </div>
  )
}

export default TextBox
