import ElementManager from '../components/ElementManager'
import Navbar from '../components/Navbar'

export default function ElementPage() {
  return (
    <>
        <Navbar />
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Elements</h1>
            <ElementManager />
        </div>
    </>

  )
}
