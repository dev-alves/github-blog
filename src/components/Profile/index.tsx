import {
  Container,
  PersonalFooterInfo,
  PersonalInfo,
  RepositoryLink,
} from './styles.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../contexts/UserContext.tsx'
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
        <h2>{name}</h2>
        <p>{bio}</p>
        <div></div>
        <PersonalFooterInfo>
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
        </PersonalFooterInfo>
      </PersonalInfo>
      <RepositoryLink>
        <a href={url}>
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
        </a>
      </RepositoryLink>
    </Container>
  )
}
