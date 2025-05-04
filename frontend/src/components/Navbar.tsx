import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Clients', path: '/clients' },
  { name: 'Projects', path: '/projects' },
  { name: 'Units', path: '/units' },
  { name: 'Elements', path: '/elements' },
  { name: 'Materials', path: '/materials' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-black/30 backdrop-blur text-white shadow px-6 py-4 flex gap-4 sticky top-0 z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-3 py-1 rounded hover:bg-white/10 transition ${
            location.pathname === item.path ? 'bg-primary/30 font-semibold' : ''
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
