// import { projects } from "@/_data/projects"
import ProjectDetails from "../ProjectDetails"
import { getPosts } from "@/app/api/route"

type ArticleDescriptionsProps = {
  width: number | undefined;
}

export default async function ArticleDescriptions({ width }: ArticleDescriptionsProps) {
  
  const data = await getPosts()
  console.log(data.data.posts.nodes.map((node: { title: any; }) => node.title))

  return (
    <>
      {/* {projects.map((project) => (
        <div key={project.id} style={{ width: width, minWidth: 300, maxWidth: 'calc((100vw - ((100px + 2rem) + 4rem + 4rem)) * 0.5)' }}>
          <ProjectDetails projectId={project.id} />
        </div>
      ))} */}
      {/* {data.data.posts.nodes.map((post: {title: any}, index: number) => {
        <div key={index} style={{ width: width, minWidth: 300, maxWidth: 'calc((100vw - ((100px + 2rem) + 4rem + 4rem)) * 0.5)' }}>
          <ProjectDetails projectId={post.title} />
          <p>{post.title}</p>
        </div>
      })} */}
    </>
  )
}
