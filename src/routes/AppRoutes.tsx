import Layout from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import Settings from '@/pages/Settings'
import Users from '@/pages/Users'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRoutes
