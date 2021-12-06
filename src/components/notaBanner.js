import React from "react"
import { Link } from "gatsby"

const _ = require("lodash")

const CategoryLink = (category) => {
    return (
        <Link to={`/categories/${_.kebabCase(category)}`}>{category}</Link>
    )
}

const ImageBanner = ( props ) => {
    const {imgsrc, slug } = props
    if (imgsrc != null) {
        return (<Link to={slug}><img className="notaImg" src={imgsrc} alt=""></img></Link>)
    }

    return null
}

const NotaBanner = ( props ) => {
    let front = props.node.frontmatter
    let slug = props.node.fields.slug

    return (
        <div key={front.id}>
            <ImageBanner imgsrc={front.imgsrc} slug={slug} />
            <h2><Link to={slug}>{front.title}{" "}</Link></h2>
            <span>{front.date}{" "}</span>
            <p>
                {front.categories.map((cat, index, arr) => {
                    if (arr.length === index + 1) {
                    return (<span>{CategoryLink(cat)}</span>)
                    }
                    else {
                    return (<span>{CategoryLink(cat)} - </span>)
                    }
            })}
            </p>
            <p>{front.summary}</p>
            <hr></hr>
        </div>
    )
}

export default NotaBanner
