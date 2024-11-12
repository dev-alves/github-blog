import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme['base-profile']};
  padding: 29px 0;

  div {
    padding-top: 60px;
  }
`
