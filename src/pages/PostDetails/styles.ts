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

  a,
  span {
    font-family: ${(props) => props.theme.stylesText.link.fontFamily},
      sans-serif;
  }

  a {
    &:hover {
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid;
    }
  }
`

export const NavigateRepositoryContainer = styled.div`
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
    svg {
      margin-right: 0.5rem;
    }
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  & > div:last-child {
    svg {
      margin-left: 0.5rem;
    }
  }
`

export const PostDetail = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-family: ${(props) => props.theme.stylesText['base-title-l'].fontFamily},
      sans-serif;
    line-height: ${(props) =>
      props.theme.stylesText['base-title-l'].lineHeight};
    margin-bottom: 0.5rem;
  }

  p {
    display: inline-block;
    color: ${(props) => props.theme['base-text']};
    font-family: ${(props) => props.theme.stylesText['base-title-m'].fontFamily},
      sans-serif;
    margin-bottom: 1.4375rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
  }
`
