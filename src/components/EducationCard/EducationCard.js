import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

const EducationCard = ({name, degree, time}) => {
    return ( 
        <div>
            <div>
                <StaticImage src="../../assets/images/education-logos/TCE.png" alt="TCE" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{degree}</p>
                <p>{time}</p>
            </div>
        </div>
     );
}
 
export default EducationCard;