import ImgCarousel from "../ImgCarousel"

type ImageDataProps = {
  data: {
    attributes: {
      ext: string;
      url: string;
      width: number;
      height: number;
    }
  }[]
}

type ArticleImgsProps = {
  containerWidth: number | undefined;
  works: {
    id: string;
    attributes: {
      title: string;
      type: string;
      year: string;
      keywords: string;
      description: string;
      slug: string;
      images: ImageDataProps;
    }
  }[];
}

export default function ArticleImgs({ containerWidth, works }: ArticleImgsProps) {
  return (
    <>
      {works && works.map((work, index) => (
        <div key={index} style={{ marginBottom: '10rem' }}>
          <ImgCarousel 
            works={works}
            projectId={work.id}
            imgContainerWidth={containerWidth}
          />
        </div>
      ))}
    </>
  )
}
