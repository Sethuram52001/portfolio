import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {certificates} from "../Certifications/Certifications.data";
import DummyComponent from './DummyComponent';

const Dummy = () => {

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "images/certificate-logos"}}) {
            nodes {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
        }            
    }
`);

    return ( 
        <div>
            <h1>Dummy</h1>
            
            {certificates.map((certificate, index) => (
                <DummyComponent 
                image_name={certificate.image}
                image_data={
                    data.allFile.nodes.reduce((t,c) => {
                        console.log(c)
                        if(c.relativePath === `images/certificate-logos/${certificate.image}`) {
                            console.log(c)
                            return c
                        }
                        else {
                            console.log("error: "+ c.relativePath);
                        }
                    })
                }  
                />
            ))}
        </div>
     );
}
 
export default Dummy;

