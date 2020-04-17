import React from "react"

export default ({ pageContext: { project } }) => (
  <section>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
  </section>
)
