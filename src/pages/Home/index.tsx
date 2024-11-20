import { Container, PostContainer } from './styles'
import { ProfileHeader } from '../../components/Profile/Header'
import { SearchPost } from '../../components/SearchPostForm'
import { Posts } from '../../components/Posts'

export function Home() {
  return (
    <Container>
      <ProfileHeader />
      <SearchPost />
      <PostContainer>
        <Posts />
      </PostContainer>
    </Container>
  )
}
