import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { title, movie, grid, shape, movieName, page } from "../styles/index.module.css";

const Film = () => {
    images = useStaticQuery(graphql`
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
        <div className={film}>
            {images.allFile.edges.map((image, index) => (
          <div className={movie} key={index}>
            <p className={movieName}>{image.node.name.replace(/-/g, " ")}</p>
            <GatsbyImage className={shape} image={getImage(image.node)} alt={image.node.name} />
          </div>
             ))}
        </div>
    )
}

export default Film;
