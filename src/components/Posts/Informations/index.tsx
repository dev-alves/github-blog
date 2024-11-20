import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faComment, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { fromDistance } from '../../../lib/dateFns'

interface PostHeaderProps {
  login: string
  createdAt: Date
  totalComments: number
}

export function PostInformations({
  login,
  createdAt,
  totalComments,
}: PostHeaderProps) {
  return (
    <Container>
      <div>
        <FontAwesomeIcon icon={faGithub} fontSize={18} />
        <span>{login}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendarDay} fontSize={18} />
        <span>{fromDistance(createdAt)}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faComment} fontSize={18} />
        <span>{totalComments || 'Não há comentários'} </span>
      </div>
    </Container>
  )
}
