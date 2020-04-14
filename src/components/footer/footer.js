/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: sticky;
  bottom: 0;
  z-index: -99;
  height: 300px;
`

const Footer = ({ siteUrl, siteTitle }) => {
  return (
    <StyledFooter
      sx={{
        backgroundColor: "white",
        p: 2,
      }}
    >
      <span>
        © {new Date().getFullYear()}, Built with Gatsby by{" "}
        <a href={siteUrl}> {siteTitle}</a>
      </span>
    </StyledFooter>
  )
}

export default Footer
