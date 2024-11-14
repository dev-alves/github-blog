import { Container } from './styles'
import { InputText } from '../InputText'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function SearchPost() {
  const { login, getPosts } = useContext(UserContext)
  async function handleOnChangeInputValue(value: string) {
    await getPosts(value)
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
