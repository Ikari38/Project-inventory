import { useEffect, useState } from 'react'
import EntityPanel from './EntityPanel'
import api from '../api/axios'

interface Client {
  id: number
  name: string
}

export default function ClientManager() {
  const [clients, setClients] = useState<Client[]>([])
  const [newName, setNewName] = useState('')

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      const res = await api.get<Client[]>('clients/')
      setClients(res.data)
    } catch (error) {
      console.error('Error fetching clients', error)
    }
  }

  const addClient = async () => {
    if (!newName.trim()) return
    try {
      await api.post('clients/', { name: newName })
      setNewName('')
      fetchClients()
    } catch (error) {
      console.error('Error adding client', error)
    }
  }

  const deleteClient = async (id: number) => {
    try {
      await api.delete(`clients/${id}/`)
      fetchClients()
    } catch (error) {
      console.error('Error deleting client', error)
    }
  }

  return (
    <EntityPanel title="Clients" onAdd={addClient}>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          placeholder="New client name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
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
    </EntityPanel>
  )
}
