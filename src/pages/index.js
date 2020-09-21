import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const images = data.allFile.edges

    return (
      <Layout>
        <div className="flex">
          {images.map(({ node }) => {
            return (
              <div className="photo-wrap" style={{ backgroundImage: `url(${node.publicURL})` }}></div>
            )
          })}
          <div className="bio-wrap">
            <div className="bio-wrap__top">
              <h1 className="thin">Gabe Kelley</h1>
              <h2 className="light">Currently a Staff Product Designer at Etsy<sup><a href="#fn1" id="ref1">1</a></sup> in Brooklyn,  I'm focused on design systems, service design and operations. As a human-centered designer, I believe I have a duty to only build with organizations that aim to improve the lives of others. While not at work, I'm either reading<sup><a href="#fn2" id="ref2">2</a></sup>, pursuing various other interests<sup><a href="#fn3" id="ref3">3</a></sup>, or finding ways to fight inequality. If you'd like to chat, go on and send me <a href="mailto:gabe@hey.com">an email</a>.</h2>
            </div>
            <div className="bio-wrap__bottom thin">
              <div className="divider"></div>
              <sup>1</sup> <span>2015 —</span> <a href="#ref1" id="fn1">↩</a><br/>
              <sup>2</sup> <span>Currently <span className="italic">Capital and Ideology</span> by Thomas Piketty</span> <a href="#ref2" id="fn2">↩</a><br/>
              <sup>3</sup> <span>Cycling, photography, camping, and then probably reading some more.</span> <a href="#ref3" id="fn3">↩</a><br/>
            </div>
          </div>
        </div>
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
          relativePath
          publicURL
        }
      }
    }
  }
`

export default IndexPage
