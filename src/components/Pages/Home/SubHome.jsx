import React from 'react';


const SubHome = (props) => {
    const {name} = props.singleProduct;
    console.log(name)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SubHome;