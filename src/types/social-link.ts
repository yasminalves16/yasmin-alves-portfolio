export type SocialLinkId = 'github' | 'linkedin' | 'email' | 'whatsapp';

export type SocialLink = {
  id: SocialLinkId;
  label: string;
  href: string;
  display: string;
};
