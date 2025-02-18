"use client"
import { useEffect, useState } from "react";
import { useDataContext } from "@/app/utils/useDataContext";
import { WorkType } from "@/types/models/Work";
// styles
import styles from "./WorkDetails.module.css";

type WorkDetailsProps = {
  slug: string;
}

export default function WorkDetails({ slug }: WorkDetailsProps) {

  const { works } = useDataContext();
  const [ work, setWork ] = useState<WorkType | undefined>();

  useEffect(() => {
    const currentWork = works.find((work) => work.slug.current === slug)
    setWork(currentWork)
  }, [works, slug])

  return (
    <>
      {work &&
        <div>
          <h2>{work.title}</h2>
          <p>{work.type}</p>
        </div>
      }
    </>

  )
}
