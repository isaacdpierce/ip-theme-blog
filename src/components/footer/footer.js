/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Card from "../cards/smallCard"
import ProfileImg from "../profile/profileImg"
import Github from "../social/github"
import Mail from "../social/mail"
import LinkedIn from "../social/linkedIn"
import Twitter from "../social/twitter"

import RookLogo from "../logo/rookLogo"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 200px 50px;
  position: sticky;
  bottom: 0;
  z-index: -99;
  height: 250px;
`

const Copyright = styled.section`
  grid-column: 1 / -1;
  grid-row: 2;
  text-align: center;
`

const ContentWrapper = styled.section`
  grid-column: 2 / 12;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 30%;
`

const TextWrapper = styled.div`
  h6 {
    text-transform: uppercase;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Footer = ({ siteUrl, siteTitle }) => {
  return (
    <StyledFooter
      sx={{
        backgroundColor: "darkGrey",
        p: 2,
      }}
    >
      <ContentWrapper>
        <Card>
          <ImageWrapper sx={{ mr: 4 }}>
            <ProfileImg />
          </ImageWrapper>
          <TextWrapper sx={{ width: "70%" }}>
            <h6 sx={{ mb: 1 }}>Work with me</h6>
            <p sx={{ m: 0 }}>
              I value honesty, integrity and clear communication. I govern a
              genuine desire to understand people and their needs. I'm
              passionate, punctual, patient and professional. Being of service
              to others makes me the happiest .
            </p>
          </TextWrapper>
        </Card>

        <RookLogo />

        <Card>
          <TextWrapper sx={{ width: "70%" }}>
            <h6 sx={{ mb: 2 }}>Connect with me</h6>
            <SocialWrapper>
              <a href="mailto: hello@isaacpierce.io?Subject=Hi%20Isaac">
                <Mail />
              </a>
              <a href="https://github.com/isaacdpierce">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/isaacpierce/">
                <LinkedIn />
              </a>
              <a href="https://twitter.com/isaacdpierce">
                <Twitter />
              </a>
            </SocialWrapper>
          </TextWrapper>
        </Card>
      </ContentWrapper>
      <Copyright>
        <span>
          © {new Date().getFullYear()}, Built with Gatsby by{" "}
          <a href={siteUrl}> {siteTitle}</a>
        </span>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer
