import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

const BaseHeaderButton = styled.button`
  border: none;
  padding: 0.5rem;
  display: flex;
  gap: 0.25rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const HeaderLocationButton = styled(BaseHeaderButton)`
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};
  font-size: 0.875rem;
  line-height: 130%;
`

export const HeaderCartButton = styled(BaseHeaderButton)`
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-500']};
`
