import { getDocs, collection, Firestore } from "firebase/firestore";
import { db } from '../config/firebase';

async function backupCollections(db: Firestore, collections: string[]) {
  const backup: Record<string, any[]> = {};

  try {
    for (const collectionName of collections) {
      const snapshot = await getDocs(collection(db, collectionName));
      backup[collectionName] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    }

    return backup;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Backup failed: ${error.message}`);
    } else {
      throw new Error("Backup failed due to an unknown error.");
    }
  }
}

export const scheduleBackup = () => {
  if (process.env.NODE_ENV === 'production') {
    setInterval(async () => {
      const backup = await backupCollections(db, ['users', 'subscriptions', 'payments']);
      // Implementar lógica para salvar backup em storage seguro
    }, 24 * 60 * 60 * 1000); // Backup diário
  }
};
