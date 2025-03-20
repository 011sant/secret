import Stripe from 'stripe';
import { NextApiResponse } from 'next';
import { buffer } from 'micro';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

export const createCheckoutSession = async (priceId: string, userId: string) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      metadata: { userId },
    });
    return session;
  } catch (error) {
    throw new Error('Error creating checkout session');
  }
};

export const getCustomerSubscription = async (customerId: string) => {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'all',
      expand: ['data.default_payment_method'],
    });
    return subscriptions.data[0];
  } catch (error) {
    throw new Error('Error fetching subscription');
  }
};

export const handleWebhookEvent = async (req: any, res: any) => {
  const signature = req.headers['stripe-signature'];
  const buf = await buffer(req);
  
  try {
    const event = stripe.webhooks.constructEvent(
      buf,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    return { event, error: null };
  } catch (error) {
    return { event: null, error };
  }
};

export async function handler(_: any, response: NextApiResponse) {
  // ...existing code...
}

/*
CONFIGURAÇÃO EXTERNA NECESSÁRIA:

1. No Dashboard do Stripe (https://dashboard.stripe.com):
   - Criar produtos e preços
   - Configurar webhook endpoints
   - Obter chaves de API

2. Comandos para testar webhooks localmente:
   ```bash
   # Instalar Stripe CLI
   stripe login
   stripe listen --forward-to localhost:3000/api/webhooks
   ```

3. Endpoints necessários:
   - POST /api/create-checkout
   - POST /api/webhooks
   - GET /api/portal
*/

export default stripe;
