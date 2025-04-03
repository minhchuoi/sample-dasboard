import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Navbar />
        <main className='p-4'>{children}</main>
      </div>
    </div>
  )
}

export default Layout
