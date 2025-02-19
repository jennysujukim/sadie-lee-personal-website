"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDataContext } from "@/app/utils/useDataContext";
import { WorkType } from "@/types/models/Work";
// styles
import styles from "./WorkDetails.module.css";

type WorkDetailsProps = {
  slug: string;
}

export default function WorkDetails({ slug }: WorkDetailsProps) {

  const router = useRouter();

  const { works } = useDataContext();
  const [ work, setWork ] = useState<WorkType | undefined>();

  useEffect(() => {
    const currentWork = works.find((work) => work.slug.current === slug)
    setWork(currentWork)
  }, [works, slug])

  return (
    <>
      {work &&
        <main className={styles.main}>
          <button type="button" onClick={() => router.back()}>Back</button>
          <section>
            <h2>{work.title}</h2>
            <div className={styles.subContainer}>
              <div className={styles.subTextContainer}>
                <p className={styles.subTextTitle}>Date</p>
                <p>{work.year}</p>
              </div>
              <div className={styles.subTextContainer}>
                <p className={styles.subTextTitle}>Category</p>
                {work.keywords.map((keyword, index) => (
                  <React.Fragment key={index}>
                    <p>{keyword}</p>
                    {index !== work.keywords.length - 1 && <p className={styles.comma}>,</p>}
                  </React.Fragment>
                ))}
              </div>
              {work.materials &&
                <div className={styles.subTextContainer}>
                  <p className={styles.subTextTitle}>Medium</p>
                  {work.materials.map((material, index) => (
                    <React.Fragment key={index}>
                      <p>{material}</p>
                      {index !== work.keywords.length - 1 && <p className={styles.comma}>,</p>}
                    </React.Fragment>
                  ))}
                </div>
              }
              {work.collaborators && 
                <div className={styles.subTextContainer}>
                  <p className={styles.subTextTitle}>Collaboration with</p>
                  {work.collaborators.map((collaborator, index) => (
                    <React.Fragment key={index}>
                      <p>{collaborator}</p>
                      {index !== work.collaborators.length - 1 && <p className={styles.comma}>,</p>}
                    </React.Fragment>
                  ))}
                </div>
              }
            </div>
          </section>
        </main>
      }
    </>

  )
}
