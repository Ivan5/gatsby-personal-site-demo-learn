import React from "react"
import { graphql } from "gatsby"

const Template = props => {
  return (
    <header>
      <h2>Template</h2>
    </header>
  )
}

export default Template

export const query = graphql`
  query($slug: String) {
    educationJson(slug: { eq: $slug }) {
      title
      description
      items {
        name
        degree
        score
        url
      }
    }
  }
`
