import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { title, movie, grid, shape, movieName, page } from "../styles/index.module.css"
import { Link } from "gatsby"

/*const IndexPage = () => {

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
*/

const IndexPage = () => {
    const films = useStaticQuery(graphql`
    query {
      allFilmJson(sort: {title: ASC}) {
        edges {
          node {
            title
            year
            director
            img_name
            avg_name
          }
        }
      }
    }
    `)

    return (
      <div className={page}>
      <h1 className={title}>Projet Algo S4</h1>
      <div className={grid}>

        {films.allFilmJson.edges.map((film, index) => (
          <div className={movie} key={index}>

            <p className={movieName}>{film.node.title} ({film.node.year})</p>
            <Link to={`/shapes/${film.node.title.toLowerCase().replace(/[().,:]/g, '').replace(/ /g, "-")}`}>
              <img className={shape} alt='' src={'../../kmeans/'+ film.node.img_name}></img>
            </Link>
          </div>
        ))}

      </div>
    </div>
    )
}



export default IndexPage

export const Head = () => <title>frametones</title>
