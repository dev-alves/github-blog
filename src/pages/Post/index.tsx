import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useParams } from 'react-router-dom'
import { Container } from './styles'
import { PostHeader } from '../../components/Posts/Header'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  const { idPost } = useParams()
  const { login, userPosts } = useContext(UserContext)
  const post = userPosts?.filter((userPost) => {
    return userPost.id === Number(idPost)
  })[0]

  return (
    <Container>
      <PostHeader login={login} post={post} />
      <div>
        <Markdown remarkPlugins={[remarkGfm]}>{post?.body}</Markdown>
      </div>
    </Container>
  )
}
