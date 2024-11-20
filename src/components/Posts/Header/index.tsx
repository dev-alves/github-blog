import { Container, Detail, NavigateRepositoryContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { PostInformations } from '../Informations'

interface PostInfoProps {
  url: string
  title: string
  createdAt: Date
  comments: number
}

interface PostDetailProps {
  login: string
  post: PostInfoProps
}

export function PostHeader({ login, post }: PostDetailProps) {
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
      <Detail>
        <h2>{post?.title}</h2>
        <div>
          <PostInformations
            login={login}
            createdAt={post?.createdAt}
            totalComments={post?.comments}
          />
        </div>
      </Detail>
    </Container>
  )
}
