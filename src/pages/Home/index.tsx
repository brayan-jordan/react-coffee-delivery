import { Brand } from './components/Brand'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Brand />
      <h1>Nossos cafés</h1>
      <CoffeeListContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListContainer>
    </HomeContainer>
  )
}
