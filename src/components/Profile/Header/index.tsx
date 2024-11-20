import { Container, PersonalInfo, RepositoryLink } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../contexts/UserContext'
import { useContext } from 'react'
import { ProfileSocialMedia } from '../SocialMedia'

export function ProfileHeader() {
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
        <div>
          <ProfileSocialMedia
            login={login}
            company={company}
            totalFollowers={followers}
          />
        </div>
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
