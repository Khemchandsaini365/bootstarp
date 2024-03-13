import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import ShoppingCart from './ShoppingCart';
import Header from './Navbar';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const newData = await response.json();
            setData(newData);
        };

        fetchData();
    }, [])
    return (
        <>

            <Header />
            {/* <ProductCard products={data} /> */}
            {/* <ShoppingCart /> */}
        </>
    )
}

export default Home