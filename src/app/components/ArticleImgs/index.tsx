import { WorkType } from "@/types/models/Work";
// components
import ImgCarousel from "../ImgCarousel"

type ArticleImgsProps = {
  works: WorkType[];
  heights: (number | string)[] | undefined;
}

export default function ArticleImgs({ works, heights }: ArticleImgsProps) {

  return (
    <>
      {works && works.map((work, index) => (
        <div 
          key={index} 
          id={work.slug.current}
          style={{ marginBottom: '15rem', height: heights ? heights[index] : "auto" }}
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
