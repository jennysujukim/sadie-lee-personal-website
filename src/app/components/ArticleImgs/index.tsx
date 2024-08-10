import { WorkType } from "@/types/models/Work";
// components
import ImgCarousel from "../ImgCarousel"

type ArticleImgsProps = {
  works: WorkType[];
  heights: number[] | undefined;
}

export default function ArticleImgs({ works, heights }: ArticleImgsProps) {

  return (
    <>
      {works && works.map((work, index) => (
        <div 
          key={index} 
          id={work.slug.current}
          style={{ marginBottom: '10rem', height: heights ? heights[index] : "auto" }}
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
