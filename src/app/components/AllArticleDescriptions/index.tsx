import { projects } from "@/_data/projects"
import ArticleDescription from "../ArticleDescription"

export default function AllArticleDescriptions() {
  
  return (
    <>
      {projects.map((project, index) => (
        <div key={index}>
          <ArticleDescription projectId={project.id} />
        </div>
      ))}
    </>
  )
}
