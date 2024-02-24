import { projects } from "@/_data/projects"
import ImgCarousel from "../ImgCarousel"

type ArticleImgsProps = {
  containerWidth: number | undefined;
}

export default function ArticleImgs({ containerWidth }: ArticleImgsProps) {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} style={{ marginBottom: '10rem' }}>
          <ImgCarousel 
            projectId={project.id}
            imgContainerWidth={containerWidth}
          />
        </div>
      ))}
    </>
  )
}
