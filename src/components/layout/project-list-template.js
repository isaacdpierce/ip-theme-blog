/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import LargeCard from "../cards/largeCard"
import { setOddEvenOffset } from "../../helpers/helpers"

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
          <LargeCard>
            <motion.div
              className="card-list__item"
              key={title}
              initial={{ x: setOddEvenOffset(index, 1200) }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              sx={{
                backgroundColor: "background.dark",
                color: "text.light",
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
                    color: "white",
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
          </LargeCard>
        )
      })}
    </StyledBlogList>
  )
}

export default PostsList
