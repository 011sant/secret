import { NextApiRequest, NextApiResponse } from 'next';
import { handleWebhookEvent } from '../../config/stripe';
import { db } from '../../config/firebase';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { event, error } = await handleWebhookEvent(req, res);
    if (error) throw error;
    if (!event) throw new Error('No event received from Stripe');

    // Processar eventos do Stripe
    switch (event.type) {
      case 'checkout.session.completed':
        // Atualizar status da assinatura
        break;
      case 'invoice.paid':
        // Registrar pagamento
        break;
      case 'customer.subscription.deleted':
        // Cancelar assinatura
        break;
    }

    res.status(200).json({ received: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Webhook error:', error.message);
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }
    return res.status(500).send('Unknown error occurred');
  }
}
