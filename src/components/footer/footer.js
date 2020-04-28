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
  grid-template-rows: 1fr 50px;
  position: sticky;
  bottom: 0;
  width: 100vw;
`

const Copyright = styled.section`
  grid-column: 1 / -1;
  grid-row: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const ContentWrapper = styled.section`
  grid-column: 1 / 16;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  width: 100px;
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
        pt: 4,
        px: 2,
      }}
    >
      <ContentWrapper>
        <Card>
          <ImageWrapper sx={{ mr: [2, 3, 4] }}>
            <ProfileImg />
          </ImageWrapper>
          <TextWrapper sx={{ width: "70%" }}>
            <h6 sx={{ mb: 1, fontFamily: "body" }}>Work with me</h6>
            <p sx={{ m: 0 }}>
              I value honesty, integrity and clear communication. I govern a
              genuine desire to understand people and their needs. I'm
              passionate, punctual, patient and professional.
            </p>
          </TextWrapper>
        </Card>

        <div sx={{ p: 3 }}>
          <Link to="/">
            <RookLogo />
          </Link>
        </div>

        <Card>
          <TextWrapper sx={{ width: "70%" }}>
            <h6 sx={{ mb: 2, fontFamily: "body" }}>Connect with me</h6>
            <Social />
          </TextWrapper>
        </Card>
      </ContentWrapper>
      <Copyright sx={{ pb: 2 }}>
        <span>
          © {new Date().getFullYear()}, Built with Gatsby by{" "}
          <a href={siteUrl}> {siteTitle}</a>
        </span>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer
