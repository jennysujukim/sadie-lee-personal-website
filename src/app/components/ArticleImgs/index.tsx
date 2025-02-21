import { WorkType } from "@/types/models/Work";
import Image from "next/image";
// components
import ImgCarousel from "../ImgCarousel"
// assets
import arrow from "@/app/assets/see-details-arrow.svg"
// styles 
import styles from "./ArticleImgs.module.css"
import Link from "next/link";

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
          style={{ height: heights ? heights[index] : "auto" }}
          className={styles.wrapper}
        >
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{work.title}</h2>
            {work.details &&
              <Link
              className={styles.detailsLink} 
              href={`/work/${work.slug.current}`}
              >
                See Full Project
                <Image 
                  src={arrow}
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </Link>
            }
          </div>
          <ImgCarousel 
            works={works}
            projectId={work.id}
          />
        </div>
      ))}
    </>
  )
}
