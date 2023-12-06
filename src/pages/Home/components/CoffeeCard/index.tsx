import {
  ButtonAddToCard,
  CardFooterContainer,
  CardFooterRightContainer,
  ChangeQuantityContianer,
  CoffeeCardContainer,
  CoffeeCharacteristicsContainer,
  PriceContainer,
} from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

export function CoffeeCard() {
  const imagePath = 'src/assets/coffees/american.svg'

  return (
    <CoffeeCardContainer>
      <img src={imagePath} alt="" />
      <CoffeeCharacteristicsContainer>
        <span>Tradicional</span>
        <span>Gelado</span>
      </CoffeeCharacteristicsContainer>
      <h2>Expresso Tradicional</h2>
      <h5>O tradicional café feito com água quente e grãos moídos</h5>
      <CardFooterContainer>
        <PriceContainer price="9,90">R$</PriceContainer>
        <CardFooterRightContainer>
          <ChangeQuantityContianer>
            <button>
              <Minus size={20} />
            </button>
            <span>1</span>
            <button>
              <Plus size={20} />
            </button>
          </ChangeQuantityContianer>
          <ButtonAddToCard>
            <ShoppingCart weight="fill" />
          </ButtonAddToCard>
        </CardFooterRightContainer>
      </CardFooterContainer>
    </CoffeeCardContainer>
  )
}
