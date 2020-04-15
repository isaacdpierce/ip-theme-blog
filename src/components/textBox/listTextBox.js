/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const ListTextBox = ({ children, align, color }) => {
  return (
    <ul
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
    </ul>
  )
}

export default ListTextBox
