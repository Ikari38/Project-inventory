import ClientManager from './components/ClientManager'

function App() {
  return (
    <div className="min-h-screen bg-background text-text px-6 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Project Inventory
      </h1>
      <ClientManager />
    </div>
  )
}

export default App
