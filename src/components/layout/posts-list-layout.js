/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import ImageCard from "../cards/ImageCard"
import { isIndexEven } from "../../helpers/helpers"

import { Link } from "gatsby"

const StyledBlogList = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
`

const PostsList = ({ posts }) => {
  return (
    <StyledBlogList>
      {posts.map(({ node: post }, index) => {
        const { title, date } = post.frontmatter
        const { excerpt } = post
        const link = post.fields.slug
        const image = post.frontmatter.featuredImage.childImageSharp.fluid

        return (
          <ImageCard key={title}>
            <motion.div
              className="card__content"
              key={title}
              initial={{ x: isIndexEven(index) ? 1200 : -1200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              sx={{
                backgroundColor: `background.${
                  isIndexEven(index) ? "dark" : "light"
                }`,
                color: `text.${isIndexEven(index) ? "light" : "dark"}`,
                p: 4,
                mb: 4,
              }}
            >
              <div className="card__image" sx={{ mr: 3 }}>
                <Img style={{ width: "100%" }} fluid={image} />
              </div>
              <div
                sx={{
                  h3: {
                    color: `text.${isIndexEven(index) ? "light" : "dark"}`,
                    m: 0,
                  },
                  span: {
                    color: "primary",
                  },
                }}
              >
                <Link to={link}>
                  <h3>{title}</h3>
                  <span>{date}</span>
                </Link>
                <p>{excerpt}</p>
              </div>
            </motion.div>
          </ImageCard>
        )
      })}
    </StyledBlogList>
  )
}

export default PostsList
