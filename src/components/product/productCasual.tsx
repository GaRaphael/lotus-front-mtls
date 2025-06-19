import Money from '@/utils/money/money';
import ProductGallery from './productGallery'

interface Props {
    product: any;
}


const ProductSizeBalls: React.FC<{ sizes: any }> = ({ sizes }) => {
    const sizeArray = sizes.split(',').map((size: any) => size.trim());

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            {sizeArray.map((size: any, index: any) => (
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

export default function ProductCasual({ product }: Props) {

    const colors = [
        { name: 'Preto', hex: '#000000' },
        { name: 'Branco', hex: '#FFFFFF' },
        { name: 'Cinza', hex: '#6A6E70' },
        { name: 'Azul', hex: '#2C98F0' },
        { name: 'Vermelho', hex: '#FF0000' },
        { name: 'Amarelo', hex: '#FFD700' },
    ];


    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

            <div className="flex">
                <div className="row">
                    <div className="col-6 ">
                        <ProductGallery images={product.images} />
                    </div>
                </div>
                <div className="mt-[130px]">
                    <div className=""
                        style={{
                            width: '500px',
                            display: 'flex',
                        }}>

                        <h4 style={{
                            fontSize: '50px',
                            fontWeight: 'SemiBold',
                            textAlign: 'center',
                            marginBottom: '30px',
                            fontFamily: 'Inter'
                        }}>
                            {product.name}
                        </h4>
                    </div>

                    <hr style={{
                        width: '500px',
                        marginBottom: '40px',
                    }} />

                    <div className="col-12 col-md-6">
                        <label
                            style={{
                                fontSize: '20px',
                                fontWeight: '600',
                                fontFamily: 'Inter'
                            }}>
                            Cor
                        </label>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginTop: '10px',
                            }}
                        >
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        margin: '5px',
                                        marginRight: '10px',
                                        marginBottom: '40px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: color.hex,
                                            marginRight: '10px',
                                            border: '1px solid black'
                                        }}
                                    ></div>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <label
                            style={{
                                fontSize: '20px',
                                fontWeight: '600',
                                fontFamily: 'Inter',
                            }}>
                            Tamanhos
                        </label>

                        <ProductSizeBalls sizes={product.size} />
                    </div>

                    <hr style={{
                        width: '500px',
                        marginBottom: '30px',
                        marginTop: '40px',
                    }} />

                    <p
                        style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '30px',
                            marginTop: '50px',
                            fontFamily: 'Inter',

                        }}>
                        {Money.maskMoney(product.price)}
                    </p>

                    <div style={{
                        marginTop: '40px',
                        marginBottom: '60px',
                        backgroundColor: '#484D50',
                        height: '50px',
                        width: '230px',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: '10px',
                    }}>
                        <button style={{
                            marginTop: '10px',
                        }}>
                            Comprar
                        </button>
                    </div>

                    <hr style={{
                        width: '500px',
                        marginBottom: '40px',
                    }} />

                    <div>
                        <p
                            style={{
                                fontSize: '26px',
                                fontWeight: '700',
                                marginBottom: '20px',
                                marginTop: '50px',
                                fontFamily: 'Inter',
                            }}>
                            Descrição do produto
                        </p>

                        <p style={{
                            fontSize: '16px',
                            fontWeight: 'bolder',
                            fontFamily: 'Inter',
                            marginBottom: '20px',
                            color: '#6A6E70'
                        }}>
                            Composição: {product.composition}
                        </p>

                        <p style={{
                            fontSize: '18px',
                            fontWeight: '300',
                            fontFamily: 'Inter',
                            marginBottom: '30px'
                        }}>
                            {product.description}
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};


