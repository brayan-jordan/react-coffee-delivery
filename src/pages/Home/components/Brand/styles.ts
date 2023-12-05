import { styled } from 'styled-components'

export const BrandContainer = styled.div`
  padding: 5.75rem 10rem;
  height: 34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BrandTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 36.5rem;
`

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 3rem;
    line-height: 130%;
  }

  span {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DoubleItemsSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem 0;
`

const ITEM_COLORS = {
  dark_yellow: 'yellow-700',
  yellow: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-500',
}

interface ItemContainerProps {
  color: keyof typeof ITEM_COLORS
}

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    flex: 1;
    color: ${(props) => props.theme['gray-700']};
    line-height: 130%;
  }
`

export const ItemIconContainer = styled.div<ItemContainerProps>`
  padding: 0.5rem;
  background-color: ${(props) => props.theme[ITEM_COLORS[props.color]]};
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`
