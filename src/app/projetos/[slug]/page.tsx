import { ProjectDetailView } from '@/src/components/projects/project-detail-view';
import { getAllProjects, getProjectBySlug } from '@/src/data';
import { DEFAULT_LOCALE } from '@/src/types/locale';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllProjects(DEFAULT_LOCALE).map((project) => ({
    slug: project.slug
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, DEFAULT_LOCALE);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView slug={slug} />;
}
