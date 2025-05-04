import MaterialManager from '../components/MaterialManager'
import Navbar from '../components/Navbar'

export default function MaterialPage() {
  return (
    <>
        <Navbar />
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Materials</h1>
            <MaterialManager />
        </div>
    </>
    
  )
}
