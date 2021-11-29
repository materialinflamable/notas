import React from "react"
import { Link } from "gatsby"

function nota(props) {
    if (props.imgsrc != null) {
        return (
            <div key={props.id}>
                <Link to={props.slug}><img className="notaImg" src={props.imgsrc} alt=""></img></Link>
                <h2><Link to={props.slug}>{props.title}{" "}</Link></h2>
                <span>{props.date}{" "}</span>
                <p>{props.categories.map((category, index, arr) => {
                        if (arr.length === index + 1) {
                        return (<span>{category}</span>)
                        }
                        else {
                        return (<span>{category} - </span>)
                        }
                })}</p>
                <p>{props.summary}</p>
                <hr></hr>
            </div>
        )
    }
    else {
        return (
            <div key={props.id}>
                <h2><Link to={props.slug}>{props.title}{" "}</Link></h2>
                <span>{props.date}{" "}</span>
                <p>{props.categories.map((category, index, arr) => {
                        if (arr.length === index + 1) {
                        return (<span>{category}</span>)
                        }
                        else {
                        return (<span>{category} - </span>)
                        }
                })}</p>
                <p>{props.summary}</p>
                <hr></hr>
            </div>
        )
        
    }
}

const ExportNotas = ( props ) => (
    nota(props)
)

export default ExportNotas
