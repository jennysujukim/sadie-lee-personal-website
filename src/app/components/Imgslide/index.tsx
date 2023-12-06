import Image from 'next/image'
import { projects } from '@/_data/projects'
import styles from './Imgslide.module.css'

export default function Imgslide(imgIndex: number) {

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className={styles.imgsContainer}>
          {project.images.map((image, index) => (
            <Image key={index} src={image} alt="" className={styles.img} />
          ))}
        </div>
      ))}
    </>
  )
}
