import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Category from "../components/category"

const CategoriesPage = ({
  data: {
      allMdx: { group },
  },
}) => (
  <Layout to_en_es="/categorias/">
      <ul>
        {
            group.map(category => (
                <Category category={category}>
                </Category>
                // <li key={category.fieldValue}>
                //     <Link to={`/categories/${_.kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link>
                // </li>
            ))
        }
      </ul>
  </Layout>
)
export default CategoriesPage

export const postQuery = graphql`
  query CategoriesPage {
    allMdx {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`
