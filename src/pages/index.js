import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people!!</h1>
    <p>Welcome to a Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/tinyAvatar.jpg"
      width={50}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Sarah R"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/blogposts/">Go to blog posts</Link> <br />
      <Link to="/blogish/">Go to non-existant page for list of pages</Link>
    </p>
  </Layout>
)

export default IndexPage
