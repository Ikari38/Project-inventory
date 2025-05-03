import { useEffect, useState } from 'react'

interface Client {
  id: number
  name: string
}

const API_URL = 'http://localhost:8000/api/clients/'

export default function ClientManager() {
  const [clients, setClients] = useState<Client[]>([])
  const [newName, setNewName] = useState('')

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setClients(data)
  }

  const addClient = async () => {
    if (!newName.trim()) return
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName })
    })
    setNewName('')
    fetchClients()
  }

  const deleteClient = async (id: number) => {
    await fetch(`${API_URL}${id}/`, { method: 'DELETE' })
    fetchClients()
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/5 p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Clients</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          placeholder="New client name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          onClick={addClient}
          className="px-4 py-2 bg-secondary hover:bg-primary text-white font-semibold rounded transition"
        >
          Add
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-white/20">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-4 text-center text-white/60">
                  No clients found.
                </td>
              </tr>
            ) : (
              clients.map((client) => (
                <tr key={client.id} className="border-b border-white/10">
                  <td className="py-2">{client.id}</td>
                  <td className="py-2">{client.name}</td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteClient(client.id)}
                      className="text-sm text-red-400 hover:text-red-200 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
