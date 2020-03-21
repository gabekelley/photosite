import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const images = data.allFile.edges

    return (
      <Layout>
        <SEO title="Home" /> 
        <ul className="photo-library">
        {images.map(({ node }) => {
          return (
            <li className="photo-wrap">
              <img key={node.id} src={node.publicURL} alt={node.name} />
            </li>
          )
        })}
        </ul>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          id
          name
          publicURL
        }
      }
    }
  }
`

export default IndexPage
