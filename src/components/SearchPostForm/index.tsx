import { Container } from './styles'
import { InputText } from '../InputText'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputType = zod.infer<typeof searchSchema>

export function SearchPost() {
  const { control } = useForm<SearchFormInputType>({
    resolver: zodResolver(searchSchema),
  })
  return (
    <Container>
      <span>Publicações</span>
      <span>6 publicações</span>
      <Controller
        control={control}
        render={() => <InputText placeholder={'Buscar conteúdo'} />}
        name={'query'}
      />
    </Container>
  )
}
