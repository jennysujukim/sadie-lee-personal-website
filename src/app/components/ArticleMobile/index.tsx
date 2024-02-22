import { projects } from "@/_data/projects"
// components
import ImgCarousel from "../ImgCarousel"
import ProjectDetails from "../ProjectDetails"

export default function ArticleMobile() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <ImgCarousel projectId={project.id} />
          <ProjectDetails projectId={project.id} />
        </div>
      ))}
    </>
  )
}
