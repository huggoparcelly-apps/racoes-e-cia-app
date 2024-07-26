import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('pix-cartao');
  const router = useRouter();

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmOrder = () => {
    if (paymentMethod === 'pix-cartao') {
      // Redireciona para o checkout do Stripe
      router.push('/checkout/stripe'); // Substitua com a URL correta do seu checkout Stripe
    } else if (paymentMethod === 'dinheiro') {
      router.push('/orders'); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg ">
      <h2 className="text-xl font-bold mb-4">Resumo do pedido</h2>
      <div className="mb-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R$ 93,99</span>
        </div>
        <div className="flex justify-between">
          <span>Taxa de Entrega</span>
          <span>R$ 7,00</span>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>R$ 100,99</span>
        </div>
      </div>
      
      <h2 className="text-xl font-bold mt-6 mb-2">Endereço de entrega</h2>
      <div className="mb-4">
        <p>R. Pinheiros Celulares, 255</p>
        <p>Bairro São Tomé - Complemento</p>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Selecionar forma de pagamento</h2>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input 
            type="radio" 
            id="pix-cartao" 
            name="payment" 
            value="pix-cartao" 
            className="mr-2" 
            checked={paymentMethod === 'pix-cartao'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="pix-cartao">PIX / Cartão</label>
        </div>
        <div className="flex items-center">
          <input 
            type="radio" 
            id="dinheiro" 
            name="payment" 
            value="dinheiro" 
            className="mr-2" 
            checked={paymentMethod === 'dinheiro'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="dinheiro">Dinheiro (Pagar na entrega)</label>
        </div>
      </div>

      <button 
        className="w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={handleConfirmOrder}
      >
        Confirmar pedido
      </button>
    </div>
  );
};

export default Checkout;
