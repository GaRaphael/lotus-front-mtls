"use client";
import React, { useEffect, useState } from 'react';
import api from '../../../../api/api';
import ModalProductCasual from './modalProductCasual'
import ProductCardCasual from './productCardCasual';


const AllProductCategories: React.FC<any> = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/suit/all');
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        getProducts();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '150px' }}>
                <div style={{ marginLeft: '40px'}}>
                    <ModalProductCasual />
                </div>
                <h1 style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    marginBottom: '50px',
                    fontSize: '30px'
                }}>Moda Masculina</h1>
                <ProductCardCasual products={products} />
            </div>

        </>
    );
}

export default AllProductCategories;