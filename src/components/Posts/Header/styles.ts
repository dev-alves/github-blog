import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;

  div:nth-child(2) {
    margin: 0 24px;
  }

  font-family: ${(props) => props.theme.stylesText['base-title-m'].fontFamily},
    sans-serif;

  font-size: ${(props) => props.theme.stylesText['base-title-m'].size};

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 8px;
    color: ${(props) => props.theme['base-label']};
  }
`
