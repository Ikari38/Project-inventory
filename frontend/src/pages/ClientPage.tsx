import ClientManager from '../components/ClientManager'
import Navbar from '../components/Navbar'

export default function ClientPage() {
  return (
    <>
        <Navbar />
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Clients</h1>
            <ClientManager />
        </div>
    </>

  )
}
