/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { isIndexEven } from "../../helpers/helpers"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const StyledImage = styled.div`
  display: flex;
  width: 300px;
  flex-shrink: 0;
`

const StyledContent = styled(motion.div)`
  display: flex;
  border-radius: 3px;
  box-shadow: 0px 3px 3px 3px #00000025;
  min-width: 60vw;
`

const DisplayCard = ({
  title,
  image,
  link,
  date,
  description,
  excerpt,
  index,
}) => {
  return (
    <StyledContent
      initial={{ x: isIndexEven(index) ? 1200 : -1200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      sx={{
        backgroundColor: `background.${isIndexEven(index) ? "dark" : "light"}`,
        color: `text.${isIndexEven(index) ? "light" : "dark"}`,
        p: 4,
        mb: 4,
        fontFamily: "body",
      }}
    >
      <StyledImage sx={{ mr: 3 }}>
        <Img style={{ width: "100%" }} fluid={image} />
      </StyledImage>
      <div
        sx={{
          h3: {
            color: `text.${isIndexEven(index) ? "light" : "dark"}`,
            m: 0,
          },
          span: {
            color: `links.${isIndexEven(index) ? "light" : "dark"}`,
          },
          p: {
            m: 0,
          },
        }}
      >
        <Link to={link}>
          <h3>{title}</h3>
          <span>{date}</span>
        </Link>
        {excerpt && <p>{excerpt}</p>}
        {description && <p>{description}</p>}
      </div>
    </StyledContent>
  )
}

DisplayCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  excerpt: PropTypes.string,
  index: PropTypes.number.isRequired,
}

export default DisplayCard
