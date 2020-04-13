import React from "react"

const Footer = ({ siteUrl, siteTitle }) => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href={siteUrl}>{siteTitle}</a>
    </footer>
  )
}

export default Footer
