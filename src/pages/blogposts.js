import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function BlogPage ({data}) {
  
  return (
    <Layout pageTitle="My Blog Posts">
      <h4>Total Posts: { data.allMarkdownRemark.totalCount }</h4>
     <ul>
     { data.allMarkdownRemark.edges.map( ({node}) => {
  
        return(
          <li key={node.id}>
              <article>
                <h2><Link to={`/posts/${node.fields.slug}`}>{node.frontmatter.title}</Link></h2>
                <p>Posted: {node.frontmatter.date}</p>
    
                <p>{node.excerpt}</p>
                <hr />
                <h3>Full Post:</h3>
              </article>
              <hr />
            </li>
        )
     })}
     </ul>
    </Layout>
  )
}

export const query = graphql(`
  query AllBlogPosts {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
        }
        fields {
          slug
        }
        excerpt
        timeToRead
      }
    }
  }
}
`)

