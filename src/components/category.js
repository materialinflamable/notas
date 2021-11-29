import React from "react"
import { Link } from "gatsby"

const _ = require('lodash')

const ExportCategories = ( props ) => (
    <li key={props.category.fieldValue}>
        <Link to={`/categories/${_.kebabCase(props.category.fieldValue)}`}>
            {console.log(props)}
            {props.category.fieldValue} ({props.category.totalCount})
        </Link>
    </li>
)
export default ExportCategories
