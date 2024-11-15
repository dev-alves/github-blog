import { Container, PostContainer } from './styles'
import { Profile } from '../../components/Profile'
import { SearchPost } from '../../components/SearchPostForm'
import { Posts } from '../../components/Posts'

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchPost />
      <PostContainer>
        <Posts />
      </PostContainer>
    </Container>
  )
}
