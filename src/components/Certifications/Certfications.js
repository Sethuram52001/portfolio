import React, {useState, useCallback} from 'react';
import * as styles from "./Certifications.module.scss";
import Certificate from '../Certificate/Certificate';
import {certificates} from "./Certifications.data";
import {useStaticQuery,graphql} from "gatsby";

const Certifications = () => {

    const [limit, setLimit] = useState(6);
    const [showStatus, setShowStatus] = useState("Show More");

    const handleShow = useCallback(() => {
        if(showStatus === "Show More") {
            setLimit(certificates.length);
            setShowStatus("Show Less");
        }
        else {
            setLimit(6);
            setShowStatus("Show more");
        }
    }, [showStatus, limit]);

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
        <div id="certifications" className={styles.certificationsSection}>
            <h1>Certifications</h1>
            <div className={styles.certificationsContainer}>
                {certificates.slice(0, limit).map((certificate, index) => (
                    <Certificate 
                        name={certificate.name} 
                        organization={certificate.organization} 
                        verification={certificate.verification} 
                        image_data={
                            data.allFile.nodes.reduce((t,c) => {
                                console.log(c)
                                if(c.relativePath === `images/certificate-logos/${certificate.image}`) {
                                    console.log(c)
                                    return c
                                }
                                else {
                                    console.log("why")
                                }
                            })
                        }                 
                    />
                ))}
            </div>
            <button
                onClick={handleShow}
            >
                {showStatus}
            </button>
        </div>
     );
}
 
export default Certifications;

/*
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "images/certificate-logos"}}) {
                nodes {
                    relativePath
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);

      fluid={data.allFile.nodes.reduce((t,c) => {
                            console.log(c.relativePath, certificate.image);
                            if(c.relativePath === `images/certificate-logos/${certificate.image.trim()}`) {
                                console.log(c.childImageSharp.fluid)
                                return c.childImageSharp.fluid
                            }
                            if(t) {
                                return t
                            }
                        }, undefined)}  
*/