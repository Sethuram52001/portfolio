import React from 'react';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import  {graphql, useStaticQuery } from "gatsby";

const DummyComponent = ({image_name,image_data}) => {

 
    const image = getImage(image_data);


    return ( 
        <div>
          <p>{image_name}</p>
            <GatsbyImage image={image} alt="fool" />
        </div>
     );
}

/*export const pageQuery = graphql`
  query {
    certificate_logo: file(
      relativePath: {eq: "images/certificate-logos/Coursera_Logo.png"}
    ) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
  }
`*/
 
export default DummyComponent;