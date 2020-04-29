/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const StyledButton = styled(motion.div)`
  text-align: center;
  text-transform: uppercase;
  border-radius: 3px;
  letter-spacing: 1px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    :hover {
      box-shadow: inset 0 0 9px #969960;
      transition: box-shadow 0.5s ease;
    }
  }
  span {
    display: inline-block;
    @media (max-width: 650px) {
      display: none;
    }
  }
`

const ButtonLarge = ({ children, to, side, animate }) => {
  return (
    <StyledButton
      initial={animate && { opacity: 0, y: "35vh" }}
      animate={animate && { opacity: 1, y: 0 }}
      transition={
        animate && {
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5,
          height: "50px",
        }
      }
      side={side}
      sx={{
        border: theme =>
          `2px solid ${
            side === "left" ? theme.colors.links.dark : theme.colors.links.light
          }`,
        a: {
          fontSize: [1, 2],
          color: `links.${side === "left" ? "dark" : "light"}`,
          py: [1, 2],
          px: [1, 2, 3],
        },
      }}
    >
      <Link to={to}>{children}</Link>
    </StyledButton>
  )
}

export default ButtonLarge
