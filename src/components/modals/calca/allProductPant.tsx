"use client";
import React, { useEffect, useState } from 'react';
import api from '../../../../api/api';
import ModalProductPant from './modalProductFeminia';
import ProductCardPant from './productCardPant';


const AllProductPant: React.FC<any> = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/pant/all');
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
                    <ModalProductPant />
                </div>
                <h1 style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    marginBottom: '50px',
                    fontSize: '30px'
                }}>Linha de Calças</h1>
                <ProductCardPant products={products} />
            </div>

        </>
    );
}

export default AllProductPant;