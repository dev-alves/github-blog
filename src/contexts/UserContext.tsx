import { createContext, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserContextProviderProps {
  children?: React.ReactNode
}

interface UserContextType {
  name: string
  login: string
  avatar: string
  followers: number
  company: string
  bio: string
  url: string
}

interface GithubUserProps {
  name: string
  login: string
  avatar_url: string
  followers: number
  company: string
  bio: string
  html_url: string
}

interface GithubDataProps {
  data: GithubUserProps
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserContextType>({} as UserContextType)

  const getUser = useCallback(async () => {
    const response: GithubDataProps = await api.get('/dev-alves')
    console.log(response.data)
    setUser({
      name: response?.data?.name,
      login: response?.data?.login,
      avatar: response?.data?.avatar_url,
      followers: response?.data?.followers,
      company: response?.data?.company,
      bio: response?.data?.bio,
      url: response?.data?.html_url,
    })
  }, [])

  useEffect(() => {
    getUser().catch((err) => console.log(err))
  }, [getUser])

  return (
    <UserContext.Provider value={{ ...user }}>{children}</UserContext.Provider>
  )
}
