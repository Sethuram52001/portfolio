import React from 'react';
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const SkillComponent = ({skill}) => {
    return ( 
        <OverlayTrigger
            key={skill.name}
            placement={"top"}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    <strong>{skill.name}</strong>
                </Tooltip>
            }
        >
            <img src={skill.src} name={skill.name} width="80px" alt={skill.name} style={{margin: "0.5rem"}} />
        </OverlayTrigger>
     );
}
 
export default SkillComponent;