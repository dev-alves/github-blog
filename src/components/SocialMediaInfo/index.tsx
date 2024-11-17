import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styles'

interface PersonalInfoProps {
  login: string
  company: string
  totalFollowers: number
}

export function SocialMediaInfo({
  login,
  company,
  totalFollowers,
}: PersonalInfoProps) {
  return (
    <Container>
      <div>
        <FontAwesomeIcon icon={faGithub} fontSize={18} />
        <span>{login}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faBuilding} fontSize={18} />
        <span>{company}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faUserGroup} fontSize={18} />
        <span>{totalFollowers} seguidores</span>
      </div>
    </Container>
  )
}
