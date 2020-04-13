import React from "react"
import { Link, graphql } from "gatsby"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <div>
      <h1>Awesome MDX Blog</h1>

      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h1>{post.frontmatter.title}</h1>
              <span>{post.frontmatter.date}</span>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
