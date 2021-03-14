import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/layout'
import {MDXRenderer} from 'gatsby-plugin-mdx'

export default function BlogPost({data}) {
  const post = data.mdx
  return(
    <Layout pageTitle="page title">
     <div>
        <h1>{post.frontmatter.title}</h1>
        
        <MDXRenderer>{post.body}</MDXRenderer>
        <h2><Link to="/" style={{color:`blue`}}>sGatsby</Link></h2>
      </div>
    </Layout>
  )
}

export const query = graphql(`
query($slug:String){
  mdx(slug: {eq:$slug}){
    body
    frontmatter{
      title
    }
  }
}
`)