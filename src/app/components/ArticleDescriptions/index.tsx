import { projects } from "@/_data/projects"
import ProjectDetails from "../ProjectDetails"

export default function ArticleDescriptions() {
  
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectDetails projectId={project.id} />
        </div>
      ))}
    </>
  )
}
