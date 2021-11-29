import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import "katex/dist/katex.min.css"
import Heading from "./Heading"

const shortcodes = { Heading }

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, fontSize: "15px" }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

class ExportLayout extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem` }}>
                <Helmet>
                    <meta charset="UTF-8"></meta>
                    <meta name="description" content="Notas es un sitio web con contenido sobre programación y matemáticas."></meta>
                    <meta name="author" content="Miguel González Duque"></meta>
                    <meta lang="es"/> 
                    <title>Notas</title>
                </Helmet>
                <header style={{ marginBottom: `4.5rem` }}>
                    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                        <h1 style={{ display: `inline` }}>Notas</h1>
                    </Link>
                    <ul style={{ listStyle: `none`, float: `right` }}>
                        <ListLink to="/todas/">Todas las notas</ListLink>
                    </ul>
                </header>
                {React.Children.map(this.props.children, (c) => <MDXProvider components={shortcodes}>{c}</MDXProvider>)}
            </div>
        )
    }
}

export default ExportLayout
