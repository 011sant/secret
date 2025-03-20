import { createCheckoutSession, getCustomerSubscription } from '../config/stripe';
import { jest } from '@jest/globals';

jest.mock('stripe', () => ({
  Stripe: jest.fn().mockImplementation(() => ({
    checkout: {
      sessions: { create: jest.fn() }
    },
    subscriptions: { list: jest.fn() }
  }))
}));

describe('Stripe Integration Tests', () => {
  test('should create checkout session', async () => {
    const session = await createCheckoutSession('price_123', 'user_123');
    expect(session).toBeDefined();
  });
});
