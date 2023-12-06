import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme['gray-200']};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin-top: 2rem;

  > img {
    width: 7.5rem;
    height: 7.5rem;
    position: relative;
    top: -1.25rem;
  }

  > h2 {
    margin-top: 0.75rem;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
  }

  > h5 {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    line-height: 130%;
    font-weight: 400;
    text-align: center;
  }
`

export const CoffeeCharacteristicsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-300']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;
  }
`

export const CardFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.75rem;
`

export const CardFooterRightContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ChangeQuantityContianer = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  color: ${(props) => props.theme['gray-900']};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};
    border: none;
  }
`

export const ButtonAddToCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['purple-700']};
  border: none;
  color: ${(props) => props.theme.white};
`
interface PrinceContainerProps {
  price: string
}

export const PriceContainer = styled.span<PrinceContainerProps>`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['gray-700']};

  &::after {
    content: '${(props) => props.price}';
    font-size: 1.5rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    margin-left: 0.5rem;
  }
`
