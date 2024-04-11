import { Project } from "@/types/models/Project"
import ImgCarousel from "../ImgCarousel"

// type ImageDataProps = {
//   data: {
//     attributes: {
//       ext: string;
//       url: string;
//       width: number;
//       height: number;
//     }
//   }[]
// }

// type ArticleImgsProps = {
//   works: {
//     id: string;
//     attributes: {
//       title: string;
//       type: string;
//       year: string;
//       keywords: string;
//       description: string;
//       slug: string;
//       images: ImageDataProps;
//     }
//   }[];
// }

type ArticleImgsProps = {
  works: Project[];
}

export default function ArticleImgs({ works }: ArticleImgsProps) {
  return (
    <>
      {works && works.map((work, index) => (
        <div key={index} style={{ marginBottom: '10rem' }}>
          <ImgCarousel 
            works={works}
            projectId={work.id}
          />
        </div>
      ))}
    </>
  )
}
