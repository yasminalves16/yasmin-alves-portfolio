import type { Certification } from '@/src/types/education';

function isCertification(item: Certification) {
  return item.kind === 'certification' || (!item.kind && !item.workload);
}

export function sortCertifications(items: Certification[]) {
  return [...items].sort((a, b) => {
    const aIsCertification = isCertification(a);
    const bIsCertification = isCertification(b);

    if (aIsCertification !== bIsCertification) {
      return aIsCertification ? -1 : 1;
    }

    const aDate = a.completedAt ?? '0000-01-01';
    const bDate = b.completedAt ?? '0000-01-01';

    return bDate.localeCompare(aDate);
  });
}
