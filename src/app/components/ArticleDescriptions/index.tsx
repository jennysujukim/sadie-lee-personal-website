import { projects } from "@/_data/projects"
import ProjectDetails from "../ProjectDetails"

type ArticleDescriptionsProps = {
  width: number | undefined;
}

export default function ArticleDescriptions({ width }: ArticleDescriptionsProps) {
  
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} style={{ width: width, minWidth: 300, maxWidth: '30vw' }}>
          <ProjectDetails projectId={project.id} />
        </div>
      ))}
    </>
  )
}
