/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import DisplayCard from "../cards/animatedDisplayCard"
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
          <DisplayCard
            key={title}
            title={title}
            date={date}
            excerpt={excerpt}
            link={link}
            image={image}
            index={index}
          />
        )
      })}
    </StyledBlogList>
  )
}

export default PostsList
