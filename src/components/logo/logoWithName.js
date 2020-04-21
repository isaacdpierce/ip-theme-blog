/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Logo from "./myLogo"
import useSiteMetaData from "../../hooks/useSiteMetadata"

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 20px;
  line-height: 1;
`

export default () => {
  const { title } = useSiteMetaData()
  return (
    <StyledLogo>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/">
        <h1
          sx={{
            color: "text.dark",
            fontFamily: "logo",
            fontSize: 3,
            fontWeight: "heading",
            margin: 0,
          }}
        >
          <span>{title}</span>
        </h1>
      </Link>
    </StyledLogo>
  )
}
