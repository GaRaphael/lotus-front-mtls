"use client";

import Icon from '@/components/icon/Icon';
import { Inter } from 'next/font/google';
import api from '../../../../api/api';
import { useRouter } from 'next/navigation';

interface Product {
    model: string;
    image: any;
    price: string;
    size: string;
    color: string;
    composition: string;
    description: string;
}

interface Props {
    products: Product[];
}

const ProductSizeBalls: React.FC<{ sizes: string }> = ({ sizes }) => {
    // Dividindo a string de tamanhos em um array
    const sizeArray = sizes.split(',').map((size) => size.trim());

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            {/* Mapeando o array de tamanhos e renderizando uma bola para cada tamanho */}
            {sizeArray.map((size, index) => (
                <div
                    key={index}
                    style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        backgroundColor: '#F6F6F6',
                        border: '1px solid #D1D1D1',
                        textAlign: 'center',
                        lineHeight: '40px',
                        margin: '5px',
                        marginBottom: '10px',
                    }}
                >
                    {size}
                </div>
            ))}
        </div>
    );
};

const handleProductDisable = async (item: any) => {
    try {

        await api.put(`/disable/accessories/${item.id}`);

        window.location.reload();

    } catch (error: any) {
        console.log(error.response);
    }

};

const ProductCardAccessories: React.FC<Props> = ({ products }) => {

    const router = useRouter()

    const handleOpenProduct = (item: any) => {

        router.push(`/psap/${item.id}`)
    };

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products?.map((product, index) => (
                    <div key={index} style={{ borderRadius: '8px', width: '300px', margin: '30px', padding: '16px', backgroundColor: '#F6F6F6' }}>

                        <div
                            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
                            <Icon
                                onClick={() => handleProductDisable(product)}
                                icon='Delete'
                                style={{ width: '35px', height: '35px', marginBottom: '15px', backgroundColor: 'white', cursor: 'pointer', marginRight: '25px' }} />
                        </div>

                        <div style={{ width: '100%', height: '350px' }} >
                            <img src={product.image} alt={product.model} style={{ width: '100%', borderRadius: '8px 8px 0 0', height: '350px' }} />
                        </div>

                        <div style={{ padding: '10px 0', textAlign: 'center' }}>

                            <h3 style={{
                                fontFamily: "Inter",
                                fontSize: '23px',
                                fontWeight: '600',
                            }}>{product.model}</h3>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: product.color, margin: '5px', border: '1px solid #D1D1D1' }} />
                            </div>

                            <ProductSizeBalls sizes={product.size} />

                            <p style={{
                                fontFamily: "Inter",
                                fontSize: '16px',
                                fontWeight: '300',
                            }}>{product.composition}</p>

                            <p style={{
                                fontFamily: "Inter",
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}>
                                {`R$ ${product.price}`}
                            </p>

                            <button onClick={() => handleOpenProduct(product)} style={{ backgroundColor: '#1C1C1C', color: 'white', fontWeight: 'bold', borderRadius: '4px', border: 'none', padding: '10px 20px', cursor: 'pointer', marginTop: '10px', width: '100%' }}>Veja mais</button>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
};

export default ProductCardAccessories;


