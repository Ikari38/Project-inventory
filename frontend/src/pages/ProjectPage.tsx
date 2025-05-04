import ProjectManager from '../components/ProjectManager'
import Navbar from '../components/Navbar'

export default function ProjectPage() {
  return (
    <>
        <Navbar />
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <ProjectManager />
        </div>
    </>

  )
}
