/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Card from "../cards/smallCard"
import ProfileImg from "../profile/profileImg"

import Social from "../social/social"

import RookLogo from "../logo/rookLogo"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 200px 1fr;
  position: sticky;
  bottom: 0;
  z-index: -99;
  width: 100vw;
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
            <h6 sx={{ mb: 1, fontFamily: "body" }}>Work with me</h6>
            <p sx={{ m: 0 }}>
              I value honesty, integrity and clear communication. I govern a
              genuine desire to understand people and their needs. I'm
              passionate, punctual, patient and professional. Being of service
              to others makes me the happiest .
            </p>
          </TextWrapper>
        </Card>

        <div>
          <RookLogo />
        </div>

        <Card>
          <TextWrapper sx={{ width: "70%" }}>
            <h6 sx={{ mb: 2, fontFamily: "body" }}>Connect with me</h6>
            <Social />
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
