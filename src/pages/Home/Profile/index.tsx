import {
  Container,
  PersonalHeaderInfo,
  PersonalInfo,
  RepositoryLink,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../../contexts/UserContext'
import { useContext } from 'react'

export function Profile() {
  const { name, login, avatar, company, followers, url, bio } =
    useContext(UserContext)

  return (
    <Container>
      <div>
        <img src={avatar} alt="" />
      </div>
      <PersonalInfo>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <p>{bio}</p>
        </div>
        <PersonalHeaderInfo>
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
            <span>{followers} seguidores</span>
          </div>
        </PersonalHeaderInfo>
      </PersonalInfo>
      <RepositoryLink>
        <a href={url}>GITHUB</a>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
      </RepositoryLink>
    </Container>
  )
}
