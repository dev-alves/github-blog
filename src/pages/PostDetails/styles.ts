import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 54rem;

  border-radius: 10px;
  position: relative;
  padding: 32px;
  top: -70px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 0 2px #000000;

  & > div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.1875rem;

    & > div {
      a,
      span,
      svg {
        font-size: ${(props) => props.theme.stylesText.link.size};
        color: ${(props) => props.theme.blue};
      }
    }
    & > div:first-child {
      border: solid 1px transparent;

      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.blue};
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  a,
  span {
    font-family: ${(props) => props.theme.stylesText.link.fontFamily},
      sans-serif;
  }

  svg {
    margin-right: 0.5rem;
  }

  a {
    &:hover {
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid;
    }
  }
`
