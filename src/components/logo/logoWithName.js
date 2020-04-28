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
  line-height: 1;
  display: inline;
  white-space: nowrap;
`

export default () => {
  const { title } = useSiteMetaData()
  return (
    <StyledLogo>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/">
        <div
          sx={{
            color: "text.dark",
            fontFamily: "logo",
            fontSize: [1, 2, 3],
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {title}
        </div>
      </Link>
    </StyledLogo>
  )
}
