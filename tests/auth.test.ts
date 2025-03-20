import { getCurrentUser, isUserAuthenticated } from '../config/firebase';

describe('Auth Tests', () => {
  test('should return null for unauthenticated user', () => {
    expect(getCurrentUser()).toBeNull();
  });

  test('should return false for unauthenticated user', () => {
    expect(isUserAuthenticated()).toBeFalsy();
  });
});
