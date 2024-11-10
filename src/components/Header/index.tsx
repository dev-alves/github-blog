import { Container } from './styles'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import logo from '../../assets/github-blog-logo.svg'

export function Header() {
  return (
    <Container>
      <div>
        <img src={effectLeft} alt={''} />
      </div>
      <img src={logo} alt={'Logo do site Github Blog'} />
      <img src={effectRight} alt={''} />
    </Container>
  )
}
