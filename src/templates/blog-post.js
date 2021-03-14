import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'

export const query = graphql(`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
    }
    timeToRead
    html
  }
}
`)

export default function BlogPost(props) {

  return(
    <Layout pageTitle="page title">
     <div>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span>
          Posted on {props.data.markdownRemark.frontmatter.date}{" "}
          <span> / </span> {props.data.markdownRemark.timeToRead} min read
        </span>
        <div dangerouslySetInnterHTML={{__html:props.data.markdownRemark.html}}></div>
        <h2><Link to="/" style={{color:`blue`}}>sGatsby</Link></h2>
      </div>
    </Layout>
  )
}

