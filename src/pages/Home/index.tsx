import { Container } from './styles'

interface HomeProps {
  children?: React.ReactNode
}

export function Home({ children }: HomeProps) {
  return <Container>{children}</Container>
}
