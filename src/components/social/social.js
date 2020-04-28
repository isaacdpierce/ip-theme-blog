/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Github from "./github"
import Mail from "./mail"
import LinkedIn from "./linkedIn"
import Twitter from "./twitter"

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Social = () => {
  return (
    <SocialWrapper>
      <div>
        <a href="mailto: hello@isaacpierce.io?Subject=Hi%20Isaac!">
          <Mail />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/isaacdpierce"
          target="_blank"
          rel="noopener"
        >
          <Github />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/isaacpierce/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn />
        </a>
      </div>

      <div>
        <a
          href="https://twitter.com/isaacdpierce"
          target="_blank"
          rel="noopener"
        >
          <Twitter />
        </a>
      </div>
    </SocialWrapper>
  )
}

export default Social
