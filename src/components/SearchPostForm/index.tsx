import { Container } from './styles'
import { InputText } from '../InputText'

export function SearchPost() {
  function handleOnChangeInputValue(value: string) {
    console.log(value)
  }

  return (
    <Container>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>
      <InputText
        onChange={handleOnChangeInputValue}
        placeholder={'Buscar conteúdo'}
      />
    </Container>
  )
}
