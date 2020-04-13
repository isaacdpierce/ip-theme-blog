/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Logo from "../logo/myLogo"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgroundColor: "white",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: "text.dark",
          }}
        >
          <Logo />
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
