import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const Category = ({ pageContext: { category }, data: { allMdx } }) => {
    const { nodes } = allMdx
    
    return (
        <Layout>
            <h2>{category}</h2>
            {nodes.map(node => (
                <div key={node.id}>
                    <h3>
                        <Link to={node.fields.slug}>
                            {node.frontmatter.title}{" "}
                        </Link>
                    </h3>
                    <span>
                        {node.frontmatter.date}{" "}
                    </span>
                    <p>
                    {node.frontmatter.categories.map((category, index, arr) => {
                        if (arr.length === index + 1) {
                            return (<span>{category}</span>)
                        }
                        else {
                            return (<span>{category} - </span>)
                        }
                    })}
                    </p>
                    <p>{node.frontmatter.summary}</p>
                </div>
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
