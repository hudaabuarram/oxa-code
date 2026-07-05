export type Language = 'en' | 'ar';

export interface ProjectLead {
  id: string;
  name: string;
  email: string;
  company?: string;
  services: string[];
  budget: string;
  message: string;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  longDescription: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  glowColor: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: { en: string; ar: string };
  iconName: string;
  glowColor: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: { en: string; ar: string };
  category: 'web' | 'mobile' | 'ai' | 'design';
  categoryLabel: { en: string; ar: string };
  description: { en: string; ar: string };
  longDescription: { en: string; ar: string };
  image: string;
  tech: string[];
  link?: string;
}
