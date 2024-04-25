import { WorkType } from "@/types/models/Work";
import ImgCarousel from "../ImgCarousel"

type ArticleImgsProps = {
  works: WorkType[];
}

export default function ArticleImgs({ works }: ArticleImgsProps) {
  return (
    <>
      {works && works.map((work, index) => (
        <div 
          key={index} 
          id={work.slug.current}
          style={{ marginBottom: '10rem' }}
        >
          <ImgCarousel 
            works={works}
            projectId={work.id}
          />
        </div>
      ))}
    </>
  )
}
