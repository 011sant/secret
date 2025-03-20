import ga4Initialize from 'ga-4-react';

let GA4R: any;

export const initGA = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
    GA4R = new ga4Initialize(process.env.NEXT_PUBLIC_GA_ID);
  }
};

export const logEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== 'undefined') {
    GA4R.event({
      category,
      action,
      label,
    });
  }
};

export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    GA4R.pageview(url);
  }
};
