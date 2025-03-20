export interface UserProfile {
  id: string;
  email: string;
  name: string;
  subscriptionStatus: 'active' | 'inactive' | 'cancelled';
  customerId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  status: string;
  priceId: string;
  customerId: string;
  currentPeriodEnd: Date;
}

export interface PaymentHistory {
  id: string;
  userId: string;
  amount: number;
  status: string;
  createdAt: Date;
}
