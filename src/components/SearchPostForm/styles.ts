import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.75rem;

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
  }
`
