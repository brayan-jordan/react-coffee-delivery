import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  gap: 1.5rem 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
`
