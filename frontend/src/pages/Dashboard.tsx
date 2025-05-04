import ClientManager from '../components/ClientManager'
import ProjectManager from '../components/ProjectManager'
import UnitManager from '../components/UnitManager'
import ElementManager from '../components/ElementManager'
import MaterialManager from '../components/MaterialManager'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
    <>
        <Navbar />
        <div className="p-6 space-y-10">
            <h1 className="text-3xl font-bold text-primary mb-8">Dashboard</h1>
            <ClientManager />
            <ProjectManager />
            <UnitManager />
            <ElementManager />
            <MaterialManager />
    </div>
    </>

  )
}
