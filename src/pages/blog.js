import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
         
            nodes {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              body
            }
          }
        
      }
    `
  )
  return (
    <Layout>
      <ul>
        {data.allMdx.nodes.map(node => {
          return (
            <li key={node.frontmatter.title}>
              <article>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted on {node.frontmatter.date}</p>
              <MDXRenderer>{node.body}</MDXRenderer>
              </article>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog