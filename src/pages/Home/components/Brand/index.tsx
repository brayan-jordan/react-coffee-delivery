import {
  BrandContainer,
  BrandTitlesContainer,
  DoubleItemsSpace,
  ItemContainer,
  ItemIconContainer,
  ItemsContainer,
  TitlesContainer,
} from './styles'
import bannerBrand from '../../../../assets/brand-banner.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Brand() {
  return (
    <BrandContainer>
      <BrandTitlesContainer>
        <TitlesContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </TitlesContainer>
        <ItemsContainer>
          <DoubleItemsSpace>
            <ItemContainer>
              <ItemIconContainer color="dark_yellow">
                <ShoppingCart size={16} weight="fill" />
              </ItemIconContainer>
              <span>Compra simples e segura</span>
            </ItemContainer>

            <ItemContainer>
              <ItemIconContainer color="yellow">
                <Timer size={16} weight="fill" />
              </ItemIconContainer>
              <span>Entrega rápida e rastreada</span>
            </ItemContainer>
          </DoubleItemsSpace>

          <DoubleItemsSpace>
            <ItemContainer>
              <ItemIconContainer color="gray">
                <Package size={16} weight="fill" />
              </ItemIconContainer>
              <span>Embalagem mantém o café intacto</span>
            </ItemContainer>

            <ItemContainer>
              <ItemIconContainer color="purple">
                <Coffee size={16} weight="fill" />
              </ItemIconContainer>
              <span>O café chega fresquinho até você</span>
            </ItemContainer>
          </DoubleItemsSpace>
        </ItemsContainer>
      </BrandTitlesContainer>
      <img src={bannerBrand} alt="" />
    </BrandContainer>
  )
}
