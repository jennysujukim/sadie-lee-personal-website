import { projects } from "@/_data/projects"
import ImgCarousel from "../ImgCarousel"

export default function ArticleImgs() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <ImgCarousel projectId={project.id} />
        </div>
      ))}
    </>
  )
}
