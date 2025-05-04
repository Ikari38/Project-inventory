import UnitManager from '../components/UnitManager'
import Navbar from '../components/Navbar'

export default function UnitPage() {
  return (
    <>
        <Navbar />
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Units</h1>
            <UnitManager />
        </div>
    </>

  )
}
