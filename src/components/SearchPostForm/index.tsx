import { Container } from './styles'
import { InputText } from '../InputText'
import { FormEvent, useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function SearchPost() {
  const { getPosts, userPosts } = useContext(UserContext)
  const [query, setQuery] = useState('')

  function handleOnChangeInputValue(value: string) {
    setQuery(value)
  }

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault()
    getPosts(query)
  }

  return (
    <Container onSubmit={(event: FormEvent) => handleOnSubmit(event)}>
      <div>
        <h3>Publicações</h3>
        {userPosts && <span> {userPosts.length} publicações</span>}
      </div>
      <InputText
        onChange={handleOnChangeInputValue}
        placeholder={'Buscar conteúdo'}
      />
    </Container>
  )
}
