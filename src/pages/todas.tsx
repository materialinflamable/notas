import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import NotaBanner from "../components/notaBanner"

const IndexPage = ({ data }) => {
    return (
        <Layout>
          <div>
              {data.allMdx.nodes.map(node  => (
                  <NotaBanner node={node} />
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