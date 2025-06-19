"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '../../../../api/api';
import { Footer, Navbar } from "../../../components";
import ProductGallery from '../../../components/product/productGallery'
import Money from '@/utils/money/money';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import ChatComponent from "../../../components/chat"
import { toast } from 'sonner';


const ProductSizeBalls: React.FC<{ sizes: any }> = ({ sizes }) => {
  const sizeArray = sizes?.split(',').map((size: any) => size.trim());

  return (
    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', marginTop: '10px' }}>
      {sizeArray?.map((size: any, index: any) => (
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

export default function ProductAccessoriesView() {

  interface Message {
    role: 'user' | 'bot' | 'error';
    content: string;
  }

  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);


  const sendMessageToApi = async (messages: Message[], newMessage: string) => {
    try {
      const updatedMessages: Message[] = [...messages, { role: 'user', content: newMessage }];

      const response = await fetch("http://localhost:11434/api/generate", {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama3',
          prompt: newMessage + ' responda em uma linha'
        })
      });

      const data = await response.text(); // Obtenha a resposta como texto
      console.log('Resposta da API:', data);

      // Processar a resposta como múltiplos objetos JSON
      const jsonObjects = data.trim().split('\n').map(line => {
        try {
          return JSON.parse(line);
        } catch (error) {
          console.error('Erro ao analisar JSON:', error);
          return null; // ou trate conforme necessário
        }
      }).filter(obj => obj !== null);

      // Processar cada objeto JSON
      const concatenatedResponse = jsonObjects.map((obj: any) => obj.response).join('');

      // Atualizar o estado de mensagens com a resposta do bot
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'user', content: newMessage },
        { role: 'bot', content: concatenatedResponse }
      ]);

      console.log('Resposta do bot:', concatenatedResponse);

    } catch (error) {
      console.error('Erro ao enviar mensagem para a API:', error);
      setMessages([...messages, { role: 'error', content: 'Desculpe, ocorreu um erro ao processar sua solicitação.' }]);
    }
  };


  const addSale = async (paymentType: string) => {
    setIsLoading(true);
    try {
      const response = await api.post(`/sales`, {
        category: 'Casual',
        model: product.model,
        payment_type: paymentType,
        value: product.price
      });

      toast.success('Venda feita com sucesso!', {
        description: `Venda feita em ${new Date().toLocaleString()}`,
        action: {
          label: 'Sucesso!',
          onClick: () => console.log('Venda realizada com sucesso'),
        },
      });

      console.log('Venda realizada:', response);
    } catch (error) {
      console.error('Erro ao realizar venda:', error);
      toast.error('Erro ao realizar venda. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }

  const handlePaymentTypeSelect = async (type: any) => {
    setSelectedPaymentType(type);
    setIsPopoverOpen(false);
    await addSale(type);
    window.alert('Venda feita com sucesso!');
  };


  const handleBuyButtonClick = () => {
    setIsPopoverOpen(true);
  };


  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        try {
          const response = await api.get(`/accessories/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getProduct();
  }, [id]);


  const model = product?.model;
  const image = product?.image;
  const price = product?.price;
  const color = product?.color;
  const size = product?.size;
  const composition = product?.composition;
  const description = product?.description;
  const product_id = product?.product_id;

  return (
    <>
      <Navbar />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

      <div className="flex">
        <div className="row">
          <div className="col-6 ">
            <ProductGallery images={image} />
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
              {model}
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
              <div

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
                    backgroundColor: color?.toString(),
                    marginRight: '10px',
                    border: '1px solid black'
                  }}
                >

                </div>

              </div>
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

            <ProductSizeBalls sizes={size} />
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
            {Money.maskMoney(price)}
          </p>

          <div style={{ marginTop: '40px', marginBottom: '60px', display: 'flex', gap: '10px' }}>
            <Popover>
              <PopoverTrigger>
                <button
                  onClick={handleBuyButtonClick}
                  style={{
                    backgroundColor: '#484D50',
                    height: '50px',
                    width: '230px',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  Comprar
                </button>
              </PopoverTrigger>
              {isPopoverOpen && (
                <PopoverContent>
                  <button onClick={() => handlePaymentTypeSelect('dinheiro')} style={{ display: 'block', width: '100%', marginBottom: '5px' }}>Dinheiro</button>
                  <button onClick={() => handlePaymentTypeSelect('credito')} style={{ display: 'block', width: '100%', marginBottom: '5px' }}>Crédito</button>
                  <button onClick={() => handlePaymentTypeSelect('debito')} style={{ display: 'block', width: '100%', marginBottom: '5px' }}>Débito</button>
                </PopoverContent>
              )}
            </Popover>

            {/* <div style={{ marginTop: '-125px', marginLeft: '40px' }}>
              {product && (
                <ChatComponent sendMessage={sendMessageToApi} messages={messages} />
              )}
            </div> */}

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
              Composição: {composition}
            </p>

            <p style={{
              fontSize: '18px',
              fontWeight: '300',
              fontFamily: 'Inter',
              marginBottom: '30px'
            }}>
              {description}
            </p>
          </div>
        </div>
      </div >
    </>
  );
};


