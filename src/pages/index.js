import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const images = data.allImageSharp.edges

    return (
      <Layout>
        <SEO title="Home" /> 
        <ul className="photo-library">
        {images.map(({ node }) => {
          return (
            <li className="photo-wrap">
              <img src={node.fluid.src} srcSet={node.fluid.srcSet} />
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
    allImageSharp {
      edges {
        node {
          fluid {
            presentationWidth
            presentationHeight
            originalImg
            srcSet
            src
          }
        }
      }
    }
  }
`

export default IndexPage
