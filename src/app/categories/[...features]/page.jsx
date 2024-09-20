import React from 'react';

const categoryDetailsPage = ({params}) => {
    if(params.features.length===3)
        return <div>{params.features[2]}</div>
    if(params.features.length===2)
        return <div>{params.features[1]}</div>
    return (
        <div>
            category Details Page
        </div>
    );
};

export default categoryDetailsPage;