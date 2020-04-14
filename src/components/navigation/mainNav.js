/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Logo from "../logo/logoWithName"

const StyledNavMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

const mainNav = () => {
  return (
    <StyledNavMenu
      sx={{
        a: {
          fontFamily: "body",
          color: "text.medium",
          width: "120px",
        },
      }}
    >
      <Link to="/about/">about</Link>
      <Link to="/portfolios/">portfolios</Link>
      <Logo />
      <Link to="/resume/">resume</Link>
      <Link to="/blog/">blog</Link>
    </StyledNavMenu>
  )
}

export default mainNav
