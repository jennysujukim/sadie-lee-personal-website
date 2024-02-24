import { projects } from "@/_data/projects"
import ProjectDetails from "../ProjectDetails"

type ArticleDescriptionsProps = {
  width: number | undefined;
}

export default function ArticleDescriptions({ width }: ArticleDescriptionsProps) {
  
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} style={{ width: width, minWidth: 300, maxWidth: 'calc((100vw - ((100px + 2rem) + 4rem + 4rem)) * 0.5)' }}>
          <ProjectDetails projectId={project.id} />
        </div>
      ))}
    </>
  )
}
