// components
import WorkDetails from '@/app/components/WorkDetails';

export default async function Page({ params }: {params: Promise<{ slug: string }>}) {

  const slug = (await params).slug;
  
  return <WorkDetails slug={slug} />
}
