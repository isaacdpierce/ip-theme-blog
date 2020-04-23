/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import resume from "../../images/resume.pdf"
import DownLoadSVG from "./downloadSVG"

const buttonDowload = () => {
  return (
    <motion.a
      style={{ display: "block" }}
      href={resume}
      download
      animate={{ rotate: 360 }}
      transition={{ duration: 12, loop: Infinity, ease: "linear" }}
    >
      <DownLoadSVG />
    </motion.a>
  )
}

export default buttonDowload
