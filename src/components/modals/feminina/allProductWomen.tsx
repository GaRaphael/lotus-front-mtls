"use client";
import React, { useEffect, useState } from 'react';
// import ProductCard, { ColorList, SizeList } from './productCard';
import api from '../../../../api/api';
import ModalProductWomen from './modalProductFeminia';
import ProductCardWomen from './productCardWomen';


const AllProductWomen: React.FC<any> = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/women/all');
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '150px' }}>
                <div style={{ margin: '50px' }}>
                    <ModalProductWomen />
                </div>
                <h1 style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    marginBottom: '50px',
                    fontSize: '30px'
                }}>Moda Feminina</h1>
                <ProductCardWomen products={products} />
            </div>

        </>
    );
}

export default AllProductWomen;