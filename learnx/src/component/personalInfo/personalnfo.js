import React from 'react'; //need this library as we are having jsx
function personalInfo(props){
    return(
        <div className="pers">
            <h2> Name:{props.name}</h2>
            <h2>Age:{props.age}</h2>
        </div>
    )
}

export default personalInfo;

