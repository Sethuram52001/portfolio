import React, {useState, useCallback} from 'react';
import * as styles from "./Certifications.module.scss";
import Certificate from '../Certificate/Certificate';
import {certificates} from "./Certifications.data";
import { Button } from 'react-bootstrap';

function calculateLimit() {
    if(window.length > 768) {
        return 6;
    }
    else if(window.length <= 768 && window.length > 480) {
        return 4;
    }
    else if(window.length <= 480) {
        return 2;
    }
    else {
        return 6;
    }
}

const Certifications = () => {

    const ShowMore = "Show More";
    const ShowLess = "Show Less";

    const [limit, setLimit] = useState(calculateLimit());
    const [showStatus, setShowStatus] = useState(ShowMore);

    const handleShow = useCallback(() => {
        if(showStatus === ShowMore) {
            setLimit(certificates.length);
            setShowStatus(ShowLess);
        }
        else {
            setLimit(calculateLimit());
            setShowStatus(ShowMore);
        }
    }, [showStatus]);

    return ( 
        <div id="certifications" className={styles.certificationsSection}>
            <h1>Certifications</h1>
            <div className={styles.certificationsContainer}>
                {certificates.slice(0, limit).map((certificate, index) => (
                    <Certificate 
                        key={index}
                        name={certificate.name} 
                        organization={certificate.organization} 
                        verification={certificate.verification} 
                        image_name={certificate.image}             
                    />
                ))}
            </div>
            <div className={styles.showMore}>
                <Button
                    onClick={handleShow}
                >
                    {showStatus}
                </Button>
            </div>
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