import crypto from 'crypto';

export const generateCSRFToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>/g, '');
};

export const rateLimit = {
  tokensPerInterval: 50,
  interval: 'hour',
  firewall: new Map()
};
