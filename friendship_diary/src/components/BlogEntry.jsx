/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export function BlogEntry({title,data}){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown= () =>{
        setIsExpanded(!isExpanded);
    }
    return(
        <div>
            <div onClick={toggleDropdown} style={{ cursor: 'pointer', fontStyle: 'italic', color: "rgb(52, 165, 235)" }}>
                {title}
            </div>
            {isExpanded && (
                <div>
                    <p>{data}</p>
                </div>
            )}
        </div>
    )
    
}