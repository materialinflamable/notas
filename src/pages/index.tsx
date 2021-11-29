import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Category from "../components/category"

interface Cat {
  fieldValue: string,
  totalCount: number
}

const compareAlphabetically = (a: Cat, b: Cat) => {
  return a.fieldValue.localeCompare(b.fieldValue)
}

const compareByCount = (a: Cat, b: Cat) => {
  return a.totalCount > b.totalCount
}

const CategoriesPage = ({
  data: {
      allMdx: { group },
  },
}) => (
  <Layout to_en_es="/categorias/">
      <ul>
        {
            group.sort(compareAlphabetically).map(category => (
                <Category category={category}>
                </Category>
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
