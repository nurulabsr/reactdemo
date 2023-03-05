import React from 'react';
import { useNavigate } from "react-router-dom";


const SubHome = (props) => {
    const {name} = props.singleProduct;
    const navigate = useNavigate();
    console.log(name)
    return (
        <div>
            <h1 onClick={()=>navigate("/details")}>{name}</h1>
        </div>
    );
};

export default SubHome;