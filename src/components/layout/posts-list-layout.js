/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import DisplayCard from "../cards/animatedDisplayCard"

const StyledBlogList = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
