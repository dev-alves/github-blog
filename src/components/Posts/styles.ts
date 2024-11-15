import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};

  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-family: ${(props) =>
          props.theme.stylesText['base-title-s'].fontFamily},
        sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: ${(props) =>
        props.theme.stylesText['base-title-s'].lineHeight};
    }
    span {
      font-family: ${(props) =>
          props.theme.stylesText['base-text-s'].fontFamily},
        sans-serif;
      color: ${(props) => props.theme['base-span']};
      line-height: ${(props) =>
        props.theme.stylesText['base-text-s'].lineHeight};
    }

    margin-bottom: 1.25rem;
  }

  p {
    display: inline-block;
    color: ${(props) => props.theme['base-text']};
    font-family: ${(props) => props.theme.stylesText['base-title-m'].fontFamily},
      sans-serif;
  }
`
