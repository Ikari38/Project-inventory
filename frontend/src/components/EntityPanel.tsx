import { ReactNode } from 'react'

interface Props {
  title: string
  onAdd?: () => void
  children: ReactNode
}

export default function EntityPanel({ title, onAdd, children }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white/5 p-6 rounded-lg shadow mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        {onAdd && (
          <button
            onClick={onAdd}
            className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded transition"
          >
            + Add
          </button>
        )}
      </div>
      {children}
    </div>
  )
}
