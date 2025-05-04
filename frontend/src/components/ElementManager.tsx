import { useEffect, useState } from 'react'
import EntityPanel from './EntityPanel'
import api from '../api/axios'

interface Element {
  id: number
  name: string
}

export default function ElementManager() {
  const [elements, setElements] = useState<Element[]>([])
  const [newElement, setNewElement] = useState('')

  useEffect(() => {
    fetchElements()
  }, [])

  const fetchElements = async () => {
    try {
      const res = await api.get<Element[]>('elements/')
      setElements(res.data)
    } catch (err) {
      console.error('Error fetching elements', err)
    }
  }

  const addElement = async () => {
    if (!newElement.trim()) return
    try {
      await api.post('elements/', { name: newElement })
      setNewElement('')
      fetchElements()
    } catch (err) {
      console.error('Error adding element', err)
    }
  }

  const deleteElement = async (id: number) => {
    try {
      await api.delete(`elements/${id}/`)
      fetchElements()
    } catch (err) {
      console.error('Error deleting element', err)
    }
  }

  return (
    <EntityPanel title="Elements" onAdd={addElement}>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Element name"
          className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
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
            {elements.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-4 text-center text-white/60">
                  No elements found.
                </td>
              </tr>
            ) : (
              elements.map((el) => (
                <tr key={el.id} className="border-b border-white/10">
                  <td className="py-2">{el.id}</td>
                  <td className="py-2">{el.name}</td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteElement(el.id)}
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
