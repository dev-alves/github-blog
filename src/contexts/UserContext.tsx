import { createContext, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserContextProviderProps {
  children?: React.ReactNode
}

interface UserStateProps {
  name: string
  login: string
  avatar: string
  followers: number
  company: string
  bio: string
  url: string
}

interface UserPostsProps {
  id: number
  title: string
  body: string
  createdAt: Date
  updateAt: Date
  comments: number
  url: string
}

interface UserContextType {
  name: string
  login: string
  avatar: string
  followers: number
  company: string
  bio: string
  url: string
  getPosts: (value: string) => void
  userPosts: Array<UserPostsProps>
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

interface GithubUserDataProps {
  data: GithubUserProps
}

interface ItemRepoDataProps {
  id: number
  title: string
  body: string
  created_at: string
  updated_at: string
  comments: number
  html_url: string
}

interface GithubRepoDataProps {
  items: Array<ItemRepoDataProps>
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserStateProps>({} as UserStateProps)
  const [userPosts, setUserPosts] = useState<UserPostsProps[]>([])

  const getUser = useCallback(async () => {
    const response: GithubUserDataProps = await api.get('/users/dev-alves')
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

  async function getPosts(value: string) {
    const url =
      '/search/issues?q=' + value + `%20repo:${user?.login}/github-blog`
    const response = await api.get<GithubRepoDataProps>(url)
    console.log(response)
    const items = response.data.items
    setUserPosts(
      items.map((item) => {
        return {
          id: item.id,
          title: item.title,
          body: item.body,
          createdAt: new Date(item.created_at),
          updateAt: new Date(item.updated_at),
          comments: item.comments,
          url: item.html_url,
        }
      }),
    )
  }

  useEffect(() => {
    getUser().catch((err) => console.log(err))
  }, [getUser])

  return (
    <UserContext.Provider value={{ ...user, getPosts, userPosts }}>
      {children}
    </UserContext.Provider>
  )
}
