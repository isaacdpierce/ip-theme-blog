/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { isEven } from "../../helpers/helpers"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const StyledContent = styled(motion.div)`
  display: flex;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 1px #00000035;
  border-top: 1px solid #ffffff15;
  width: 930px;

  @media (max-width: 950px) {
    max-width: 80vw;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
`

const StyledImage = styled.div`
  display: flex;
  width: 480px;
  flex-shrink: 0;
  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const StyledTitle = styled(motion.span)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    display: inline-block;
  }
  text-transform: uppercase;
`

const StyledText = styled(motion.span)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledLink = styled(motion.span)`
  text-transform: uppercase;
  border: 1px solid #6a6e29;
  border-radius: 2px;
  display: inline-block;
  :hover {
    box-shadow: inset 0 0 3px #6a6e29;
  }
  @media (max-width: 950px) {
    margin-top: 10px;
  }
`

const DisplayCard = ({
  title,
  image,
  link,
  date,
  description,
  excerpt,
  index,
  url,
  code,
}) => {
  const showTitleAndDate = () => {
    if (link) {
      return (
        <StyledTitle>
          <Link to={link}>
            <h2>{title}</h2>
            <p>{date}</p>
          </Link>
        </StyledTitle>
      )
    } else {
      return (
        <StyledTitle>
          <h2>{title}</h2>
          <p>{date}</p>
        </StyledTitle>
      )
    }
  }
  return (
    <StyledContent
      initial={{ x: isEven(index) ? 1200 : -1200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      sx={{
        backgroundColor: `background.${isEven(index) ? "dark" : "light"}`,
        color: `text.${isEven(index) ? "light" : "dark"}`,
        p: [3, 4],
        mb: 5,
        fontFamily: "body",
      }}
    >
      <StyledImage sx={{ mr: [0, 0, 3] }}>
        <Img style={{ width: "100%" }} fluid={image} />
      </StyledImage>
      <StyledText
        sx={{
          h2: {
            fontSize: [1, 2, 3],
            color: `text.${isEven(index) ? "light" : "dark"}`,
            fontFamily: "body",
            m: 0,
          },
          a: {
            color: `links.${isEven(index) ? "light" : "dark"}`,
            fontSize: [2, 4],
          },
          p: {
            m: 0,
            fontSize: [1, 2, 3],
          },
        }}
      >
        {showTitleAndDate()}
        {excerpt && <p>{excerpt}</p>}
        {description && <p>{description}</p>}
        <div>
          {url && (
            <StyledLink sx={{ pt: 1, px: [2], mr: [2, 3] }}>
              <a href={url}>Live</a>
            </StyledLink>
          )}
          {code &&
            code.map(link => (
              <StyledLink sx={{ pt: 1, px: [2], mr: [2, 3] }}>
                <a href={link.url}>{link.source}</a>
              </StyledLink>
            ))}
        </div>
      </StyledText>
    </StyledContent>
  )
}

DisplayCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  excerpt: PropTypes.string,
  index: PropTypes.number.isRequired,
  url: PropTypes.string,
  code: PropTypes.array,
}

export default DisplayCard
