import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import {MDXRenderer} from 'gatsby-plugin-mdx'


const BlogPage = ({data}) => {
  
  return (
    <Layout pageTitle="My Blog Posts">
      <h4>Total Posts: { data.allMdx.totalCount }</h4>
     <ul>
     { data.allMdx.nodes.map( node => {
  
        return(
          <li key={node.slug}>
              <article>
                <h2><Link to={`/${node.slug}/`}>{node.frontmatter.title}</Link></h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.slug}</p>
                <p>{node.excerpt}</p>
                <hr />
                <h3>Full Post:</h3>
                <MDXRenderer>{node.body}</MDXRenderer>
              </article>
              <hr />
            </li>
        )
     })}
     </ul>
    </Layout>
  )
}

export const query = (graphql`
  query AllBlogPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      nodes {
        excerpt(pruneLength: 25)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        body
        slug
      }
    }
  }
`)

  export default BlogPage