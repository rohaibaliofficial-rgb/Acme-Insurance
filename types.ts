
export enum InsuranceType {
  AUTO = 'Auto Insurance',
  HOME = 'Home Insurance',
  LIFE = 'Life Insurance',
  HEALTH = 'Health Insurance',
  BUSINESS = 'Business Insurance',
  OTHER = 'Other',
}

export interface QuoteResponse {
  planName: string;
  premium: string; // e.g., "$150/month"
  coverageDetails: string[];
  disclaimer: string;
}

export interface FeatureProps {
  icon: string; // Tailwind icon class or emoji
  title: string;
  description: string;
}

export interface TestimonialProps {
  quote: string;
  customerName: string;
  avatarUrl: string;
}
