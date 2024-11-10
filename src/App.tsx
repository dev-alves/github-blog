import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Profile } from './pages/Home/Profile'
import { UserProvider } from './contexts/UserContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <UserProvider>
        <Home>
          <Profile />
        </Home>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
