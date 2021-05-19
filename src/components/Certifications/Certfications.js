import React from 'react';
import Certificate from '../Certificate/Certificate';
import {certificates} from "./Certifications.data";

const Certifications = () => {

    return ( 
        <div id="certifcations">
            <h1>Certifications</h1>
            {certificates.map((certificate, index) => (
                <Certificate name={certificate.name} organization={certificate.organization} verification={certificate.verification} />
            ))}
        </div>
     );
}
 
export default Certifications;