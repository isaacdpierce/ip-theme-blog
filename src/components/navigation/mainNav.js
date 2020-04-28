/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { colors } from "../../gatsby-plugin-theme-ui/index"

import Logo from "../logo/logoWithName"

const StyledNavMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  will-change: color;
  .nav-link {
    transition: all 0.5s ease;
    &:hover {
      color: ${colors.black};
      text-shadow: 0 0 1px ${colors.black};
      letter-spacing: 0.5px;
    }
  }
`

const mainNav = ({ path }) => {
  return (
    <StyledNavMenu
      sx={{
        a: {
          fontFamily: "body",
          color: "text.medium",
          fontSize: 2,
          width: "130px",
        },
      }}
    >
      <Link className="nav-link" to="/about/">
        about
      </Link>
      <Link className="nav-link" to="/">
        portfolios
      </Link>
      <Logo />
      <Link className="nav-link" to="/resume/">
        resume
      </Link>

      <AnchorLink className="nav-link" to={`${path}#contact`}>
        contact
      </AnchorLink>
    </StyledNavMenu>
  )
}

export default mainNav
