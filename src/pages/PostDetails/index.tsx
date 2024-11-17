import { Container } from './styles'
import { PersonalInfo } from '../../components/Profile/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { SocialMediaInfo } from '../../components/SocialMediaInfo'

export function PostDetails() {
  const { name, login, company, followers } = useContext(UserContext)
  return (
    <Container>
      <div>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
          <span>VOLTAR</span>
        </div>
        <div>
          <a href={'#'}>VER NO GITHUB</a>
        </div>
      </div>
      <PersonalInfo>
        <h2>{name}</h2>
        <div>
          <SocialMediaInfo
            login={login}
            totalFollowers={followers}
            company={company}
          />
        </div>
      </PersonalInfo>
    </Container>
  )
}
