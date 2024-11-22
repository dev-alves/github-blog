import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 54rem;

  img {
    max-height: 54rem;
    max-width: 54rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    &:hover {
      border-bottom: 1px solid;
    }
  }

  & > div:nth-child(2) {
    padding: 0 2rem;
    p {
      font-family: ${(props) =>
          props.theme.stylesText['base-title-m'].fontFamily},
        sans-serif;
      color: ${(props) => props.theme['base-text']};
      font-size: ${(props) => props.theme.stylesText['base-title-m'].size};
    }
  }
`
