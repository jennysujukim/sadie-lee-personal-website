// components
import WorkDetails from '@/app/components/WorkDetails';
// styles
//import styles from './workDetailPage.module.css';

export default async function Page({ params }: {params: Promise<{ slug: string }>}) {

  const slug = (await params).slug;
  
  return <WorkDetails slug={slug} />
}
