import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {certificates} from "../Certifications/Certifications.data";
import DummyComponent from './DummyComponent';

const Dummy = () => {

    /*const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "images/certificate-logos"}}) {
                nodes {
                    relativePath 
                    childImageSharp {
                        gatsbyImageData(
                            width: 300
                        )
                    }
                }
            }
        }
    `)*/

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "images/certificate-logos"}}) {
                nodes {
                  relativePath
                  childImageSharp {
                    gatsbyImageData(width: 200)
                  }
                }
              }
        }
    `);

    certificates.map((o,i) => {
        data.allFile.nodes.reduce((t,c) => {
            console.log(c.relativePath, o.image)
            if(c.relativePath === `images/certificate-logos/${o.image}`) {
                
            }
        })
    })

    return ( 
        <div>
            <h1>Dummy</h1>
            
            {certificates.map((certificate, index) => (
                <DummyComponent 
                    image_name={certificate.image}
                    image_data={
                        data.allFile.nodes.reduce((t,c) => {
                            console.log(c.relativePath, certificate.image)
                            if(c.relativePath === `images/certificate-logos/${certificate.image}`) {
                                console.log(c.relativePath)
                                return c
                            }
                        })
                    }
                />
            ))}
        </div>
     );
}
 
export default Dummy;

