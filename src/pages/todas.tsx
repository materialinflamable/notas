import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Nota from "../components/nota"

function processNode(node) {
  const showCondition = node.frontmatter.show === null || node.frontmatter.show 
  if (showCondition) {
    if ("imgsrc" in node.frontmatter) {
      return (
        <Nota id={node.id} slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} categories={node.frontmatter.categories} summary={node.frontmatter.summary} imgsrc={node.frontmatter.imgsrc}></Nota>
      )
    }
    else {
      return (
          <Nota id={node.id} slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} categories={node.frontmatter.categories} summary={node.frontmatter.summary}></Nota>
      )
    }
  }
  else {
    return null
  }
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
          {data.allMdx.nodes.map(node  => (
                        processNode(node)
                      )
                    )}
      </div>
      
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        categories
        summary
        show
      }
    }
  }
}
`