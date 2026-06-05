import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { ContactSection } from './ContactSection'

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar variant="page" />
      <Outlet />
      <ContactSection />
    </div>
  )
}
