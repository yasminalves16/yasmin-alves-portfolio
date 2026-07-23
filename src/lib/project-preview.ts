type ProjectPreviewSource = {
  description?: string;
  summary: string;
};

export function getProjectPreviewText(project: ProjectPreviewSource) {
  if (project.description) {
    return project.description.split('\n\n')[0].replace(/\n/g, ' ');
  }

  return project.summary;
}
