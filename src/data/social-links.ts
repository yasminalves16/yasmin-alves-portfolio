import type { SocialLink } from '../types/social-link';

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/yasminalves16',
    display: 'yasminalves16'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/devyasmin/',
    display: '/in/devyasmin/'
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:yasmin_dev@outlook.com',
    display: 'yasmin_dev@outlook.com'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/5512983191908',
    display: '(12) 98319-1908'
  }
];

export function getSocialLink(id: SocialLink['id']): SocialLink | undefined {
  return socialLinks.find((link) => link.id === id);
}
