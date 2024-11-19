import { Container } from './styles'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { fromDistance } from '../../lib/dateFns'
import { useNavigate } from 'react-router-dom'

export function Posts() {
  const navigate = useNavigate()
  const { userPosts } = useContext(UserContext)

  function RedirectTo(idPost: number) {
    return navigate(`/${idPost}/detail`)
  }

  return (
    <>
      {userPosts.map((post) => {
        return (
          <Container key={post.id} onClick={() => RedirectTo(post.id)}>
            <header>
              <h3>{post.title}</h3>
              <span>{fromDistance(new Date(post.createdAt))}</span>
            </header>
            <p>{post.body}</p>
          </Container>
        )
      })}
    </>
  )
}
