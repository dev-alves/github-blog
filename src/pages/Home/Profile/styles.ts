import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 54rem;
  border-radius: 10px;
  position: relative;
  padding: 32px;
  top: -70px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    margin-right: 32px;
  }

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 0 2px #000000;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-family: ${(props) => props.theme.stylesText['base-title-l'].fontFamily},
      sans-serif;
    line-height: ${(props) =>
      props.theme.stylesText['base-title-l'].lineHeight};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: ${(props) => props.theme.stylesText['base-title-m'].fontFamily},
      sans-serif;
    margin-bottom: 1.4rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    font-family: ${(props) => props.theme.stylesText.link.fontFamily},
      sans-serif;
    font-size: ${(props) => props.theme.stylesText.link.size};
  }
`

export const PersonalInfo = styled.section`
  display: flex;
  flex-direction: column;
`

export const RepositoryLink = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 32px;

  svg {
    margin-left: 8px;
    color: ${(props) => props.theme.blue};
  }
`

export const PersonalHeaderInfo = styled.header`
  display: flex;
  flex-direction: row;

  div:nth-child(2) {
    margin: 0 24px;
  }

  font-family: ${(props) => props.theme.stylesText['base-title-m'].fontFamily},
    sans-serif;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    margin-right: 8px;
    color: ${(props) => props.theme['base-label']};
  }
`
