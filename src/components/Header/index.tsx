import {
  HeaderButtonsContainer,
  HeaderCartButton,
  HeaderContainer,
  HeaderLocationButton,
} from './styles'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
      <HeaderButtonsContainer>
        <HeaderLocationButton>
          <MapPin weight="fill" size={22} />
          <span>Schroeder, SC</span>
        </HeaderLocationButton>
        <HeaderCartButton>
          <ShoppingCart weight="fill" size={22} />
        </HeaderCartButton>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
