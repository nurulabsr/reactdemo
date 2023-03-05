import React, { useState, useEffect } from 'react';
import SubHome from './SubHome';
// import SubHome from './SubHome';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(result=> result.json())
        .then(datum =>{ setData(datum)}) 
    }, [])
    // console.log(data)
    return (
        <div style={{margin: '200px', textAlign: 'center'}}>
            <h1>HOME DATA tested</h1>
           
            {
                data?.map(singleProduct => <SubHome singleProduct={singleProduct} key={singleProduct?.id}></SubHome>)
            }
     </div>
    );
};

export default Home;