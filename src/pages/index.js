import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { title, movie, grid, shape, movieName, page } from "../styles/index.module.css"
import { Link } from "gatsby"

const IndexPage = () => {

  const images = useStaticQuery(graphql`

      query {
        allFile(filter: {extension: {eq: "jpg"}}, sort: {name: ASC}) {
          edges {
            node {
              name
              publicURL
            }
          }
        }
      }
    `)

  return (
    <div className={page}>
      <h1 className={title}>Projet Algo S4</h1>
      <div className={grid}>

        {images.allFile.edges.map((image, index) => (

            <div className={movie} key={index}>

                <p className={movieName}>{image.node.name.replace(/-/g, " ")}</p>
                <Link to={`/shapes/${image.node.name.toLowerCase().replace(/[().]/g, '')}`}>
                    <img className={shape} alt='' src={image.node.publicURL}></img>
                </Link>

            </div>

        ))}

      </div>
    </div>
  )
}

export default IndexPage
//<GatsbyImage className={shape} image={getImage(image.node)} alt={image.node.name} />
// created url : /shapes/2001-a-space-odyssey-1968
//current url : /shapes/2001-A-Space-Odyssey-(1968)
//task : lowercase + remove brackets
export const Head = () => <title>frametones</title>
