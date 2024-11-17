import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Home } from './pages/Home'
import { PostDetails } from './pages/PostDetails'

export function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<DefaultLayout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/post/:idPost/detail'} element={<PostDetails />} />
      </Route>
    </Routes>
  )
}
