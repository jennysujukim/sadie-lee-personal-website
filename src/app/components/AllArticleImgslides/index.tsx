import { projects } from "@/_data/projects"
import ArticleImgslide from "../ArticleImgslide"

export default function AllArticleImgslides() {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index}>
          <ArticleImgslide projectId={project.id} />
        </div>
      ))}
    </>
  )
}
