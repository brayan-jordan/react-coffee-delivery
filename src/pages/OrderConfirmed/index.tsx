import { OrderConfirmedContainer, OrderConfirmedLeftContainer } from './styles'
import orderConfirmedBanner from '../../assets/order-confirmed-banner.png'

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <OrderConfirmedLeftContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <div>
          <span>Icone</span>
          <div>
            <span>Entrega em Rua João Daniel Martinelli, 102</span>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>
          <span>Icone</span>
          <div>
            <span>Previsão de entrega</span>
            <span>20 min - 30 min</span>
          </div>
          <span>Icone</span>
          <div>
            <span>Pagamento na entrega</span>
            <span>Cartão de crédito</span>
          </div>
        </div>
      </OrderConfirmedLeftContainer>
      <img src={orderConfirmedBanner} alt="" />
    </OrderConfirmedContainer>
  )
}
