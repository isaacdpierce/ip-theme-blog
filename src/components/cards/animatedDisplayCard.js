/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { isEven } from "../../helpers/helpers"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const StyledImage = styled.div`
  display: flex;
  width: 480px;
  flex-shrink: 0;
`

const StyledContent = styled(motion.div)`
  display: flex;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 1px #00000035;
  border-top: 1px solid #ffffff15;
  min-width: 60vw;
  max-width: 75vw;
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
  github,
}) => {
  const showTitleAndDate = () => {
    if (link) {
      return (
        <Link to={link}>
          <h3>{title}</h3>
          <span>{date}</span>
        </Link>
      )
    } else {
      return (
        <>
          <h3>{title}</h3>
          <span>{date}</span>
        </>
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
        p: 4,
        mb: 5,
        fontFamily: "body",
      }}
    >
      <StyledImage sx={{ mr: 4 }}>
        <Img style={{ width: "100%" }} fluid={image} />
      </StyledImage>
      <div
        sx={{
          h3: {
            color: `text.${isEven(index) ? "light" : "dark"}`,
            m: 0,
          },
          span: {
            color: `links.${isEven(index) ? "light" : "dark"}`,
            textTransform: "uppercase",
            mr: 3,
          },
          p: {
            m: 0,
          },
        }}
      >
        {showTitleAndDate()}
        {excerpt && <p>{excerpt}</p>}
        {description && <p>{description}</p>}
        {url && (
          <span>
            <a href={url}>Live</a>
          </span>
        )}
        {github &&
          github.map(link => (
            <span>
              <a href={link.url}>{link.type}</a>
            </span>
          ))}
      </div>
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
  github: PropTypes.array,
}

export default DisplayCard
