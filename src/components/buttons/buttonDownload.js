/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css, keyframes } from "@emotion/core"

import resume from "../../images/resume.pdf"
import DownLoadSVG from "./downloadSVG"

// Had to use keyframes because motion cancels transform translate.
const rotate = keyframes`
 0% {
   transform: rotate(0deg)
 }
 100% {
   transform: rotate(360deg)
 }
`

const buttonDowload = () => {
  return (
    <a
      style={{ display: "block" }}
      href={resume}
      download
      css={css`
        animation: ${rotate} 12s infinite linear;
      `}
    >
      <DownLoadSVG />
    </a>
  )
}

export default buttonDowload
