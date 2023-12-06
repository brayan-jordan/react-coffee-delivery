import { styled } from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  padding: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: self-end;
`

export const OrderConfirmedLeftContainer = styled.div`
  > h1 {
    color: ${({ theme }) => theme['yellow-700']};
    font-size: 2rem;
    line-height: 130%;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
  }

  > span {
    color: ${({ theme }) => theme['gray-800']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`
