// components
import WorkDetails from '@/app/components/WorkDetails';

export default function Page({ params }: {params: { slug: string }}) {

  return <WorkDetails slug={params.slug} />
}
