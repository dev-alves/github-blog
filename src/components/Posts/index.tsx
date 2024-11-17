import { Container } from './styles'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { fromDistance } from '../../lib/dateFns'

export function Posts() {
  const { userPosts } = useContext(UserContext)

  function handleClick() {}

  return (
    <>
      {userPosts.map((post) => {
        return (
          <Container key={post.title} onClick={handleClick}>
            <header>
              <h3>{post.title}</h3>
              <span>{fromDistance(new Date(post.created_at))}</span>
            </header>
            <p>{post.body}</p>
          </Container>
        )
      })}
    </>
  )
}
