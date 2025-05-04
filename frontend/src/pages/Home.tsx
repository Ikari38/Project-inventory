import { Link } from 'react-router-dom'

export default function Home() {
  const panels = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Clients', path: '/clients' },
    { name: 'Projects', path: '/projects' },
    { name: 'Units', path: '/units' },
    { name: 'Elements', path: '/elements' },
    { name: 'Materials', path: '/materials' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Project Inventory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {panels.map((panel) => (
          <Link
            key={panel.name}
            to={panel.path}
            className="bg-white/5 p-6 rounded-xl shadow hover:bg-primary/20 transition"
          >
            <h2 className="text-xl font-semibold">{panel.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
