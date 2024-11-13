import { Container } from './styles'
import { Profile } from '../../components/Profile'
import { SearchPost } from '../../components/SearchPostForm'

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchPost />
    </Container>
  )
}
