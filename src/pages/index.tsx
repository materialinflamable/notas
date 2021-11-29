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
  if (a.totalCount == b.totalCount) {
    return 0
  }
  else if (a.totalCount < b.totalCount) {
    return 1
  }
  else {
    return -1 
  }
}

const compareByCountAndAlphabetically = (a: Cat, b: Cat) => {
  console.log(a)
  console.log(b)
  if (a.totalCount != b.totalCount) {
    return compareByCount(a, b)
  }
  else {
    return compareAlphabetically(a, b)
  }
}

const CategoriesPage = ({
  data: {
      allMdx: { group },
  },
}) => (
  <Layout to_en_es="/categorias/">
      <ul>
        {
            group.sort(compareByCountAndAlphabetically).map(category => (
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
        totalCount
      }
    }
  }
`
