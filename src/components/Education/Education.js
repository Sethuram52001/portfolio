import React from 'react';

const Education = () => {

    const education = [
        {
            name: "Thiagarajar College of Engineering",
            degree: "BE Computer Science and Engineering",
            time: "2019 - 2023"
        }
    ]

    return ( 
        <div>
            <h1>Education</h1>
            <div>
                <h3>{education[0].name}</h3>
                <p>{education[0].degree}</p>
                <p>{education[0].time}</p>
            </div>
        </div>
     );
}
 
export default Education;