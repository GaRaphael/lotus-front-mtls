import React from 'react';
import pano1 from '../../public/image/pano1.jpg';
import pano2 from '../../public/image/pano2.jpg';
import pano3 from '../../public/image/pano3.jpg';

export default function Products() {

  return (
    <>
      <div className="row flex bg-gray-100">
        <div className="pt-[150px]">
          <p className="mb-5 text-center pb-[20px]"
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#333',
            }}>
            Descrição do produto
          </p>
          <p className="text-center pb-[50px]"
            style={{
              fontSize: '1.5rem',
              opacity: 0.7,
              color: '#333',
            }}>
            Na nossa alfaiataria, elevamos a arte de vestir para uma experiência de conforto e sofisticação sem igual.
          </p>
          <p className="pr-[320px] pl-[330px]"
            style={{
              fontWeight: 400,
              opacity: 1,
              color: 'gray',
            }}>
            Experimente a elegância e o conforto incomparáveis dos nossos tecidos premium. Cada peça é meticulosamente confeccionada para um ajuste perfeito e durabilidade excepcional. Descubra a diferença que a qualidade do tecido pode fazer em nosso compromisso com o conforto e estilo impecáveis.          </p>
          <div className="flex justify-center mt-[50px] mb-[150px]">
            <img src={pano1.src} alt="pano1" style={{
              width: '415px',
              height: 'auto',
              paddingRight: '30px',

            }} />
            <img src={pano2.src} alt="pano2" style={{
              width: '415px',
              height: 'auto',
              paddingRight: '30px',

            }} />
            <img src={pano3.src} alt="pano3" style={{
              width: '415px',
              height: 'auto',
              paddingRight: '30px',

            }} />
          </div>
        </div>
      </div >
    </>
  );
};
