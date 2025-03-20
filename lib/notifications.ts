import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { captureException } from '../config/sentry';

const firebaseConfig = {
  // your firebase config here
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const initializeNotifications = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging);
      return token;
    }
    return null;
  } catch (error: unknown) {
    captureException(error as Error);
    return null;
  }
};

export const sendNotification = async (userId: string, message: string) => {
  try {
    // Implementar lógica de envio
  } catch (error: unknown) {
    captureException(error as Error);
  }
};
