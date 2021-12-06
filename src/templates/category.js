import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import NotaBanner from '../components/notaBanner'


const Category = ({ pageContext: { category }, data: { allMdx } }) => {
    const { nodes } = allMdx
    
    return (
        <Layout>
            <h2>{category}</h2>
            {nodes.map(node => (
                <NotaBanner node={node}></NotaBanner>
            ))}
        </Layout>
    )
}

export default Category

Category.propTypes = {
    pageContext: PropTypes.shape({
        category: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.shape({
        allMdx: PropTypes.shape({
            nodes: PropTypes.array.isRequired,
        }),
    }).isRequired,
}

export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          categories
          summary
        }
        fields {
          slug
        }
      }
    }
  }
`
