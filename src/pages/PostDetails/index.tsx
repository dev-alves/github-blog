import { Container, NavigateRepositoryContainer, PostDetail } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Link, useParams } from 'react-router-dom'
import { PostHeader } from '../../components/Posts/Header'

export function PostDetails() {
  const { idPost } = useParams()
  const { login, userPosts } = useContext(UserContext)
  const post = userPosts?.filter((userPost) => {
    return userPost.id === Number(idPost)
  })[0]

  return (
    <Container>
      <NavigateRepositoryContainer>
        <div>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
            <span>VOLTAR</span>
          </Link>
        </div>
        <div>
          <a href={post?.url}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
          </a>
        </div>
      </NavigateRepositoryContainer>
      <PostDetail>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
        <div>
          <PostHeader
            login={login}
            createdAt={post?.createdAt}
            totalComments={post?.comments}
          />
        </div>
      </PostDetail>
    </Container>
  )
}
