import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { title, movie, grid, shape, movieName, page } from "../styles/index.module.css"

const IndexPage = () => {

  const images = useStaticQuery(graphql`

      query {
        allFile(filter: {extension: {eq: "jpg"}}) {
          edges {
            node {
              name
              childImageSharp {
                gatsbyImageData
              }
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
            <GatsbyImage className={shape} image={getImage(image.node)} alt={image.node.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
