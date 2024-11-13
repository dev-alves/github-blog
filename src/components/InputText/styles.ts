import styled from 'styled-components'

export const Input = styled.input`
  padding: 12px 16px;
  background: ${(props) => props.theme['base-input']};
  outline: 0;
  border: 1px solid ${(props) => props.theme['base-label']};
  border-radius: 6px;

  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme['brand-blue']};
  }
`
