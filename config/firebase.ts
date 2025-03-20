import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getApps, cert, initializeApp as initializeAdminApp } from 'firebase-admin/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Firebase init error:', error.message);
  }
}

export const db = getFirestore();
export const auth = getAuth();

// Funções de utilidade
export const getCurrentUser = () => auth.currentUser;
export const isUserAuthenticated = () => !!auth.currentUser;

// Função helper para ambiente Vercel
const getFirebasePrivateKey = () => {
  if (process.env.FIREBASE_PRIVATE_KEY) {
    return process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');
  }
  return undefined;
};

// Modificar inicialização do Admin SDK
if (!getApps().length) {
  initializeAdminApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: getFirebasePrivateKey()
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}

/*
CONFIGURAÇÃO EXTERNA NECESSÁRIA:

1. No Console do Firebase (https://console.firebase.google.com):
   - Criar novo projeto
   - Ativar Authentication (Email/Password, Google)
   - Configurar Firestore
   - Baixar serviceAccountKey.json

2. Configurar regras de Firestore:
   - Implementar regras do arquivo firestore.rules
   - Publicar regras via Firebase Console ou CLI

3. Configurar índices necessários:
   ```bash
   firebase init firestore
   firebase deploy --only firestore:indexes
   ```

4. Instalar Firebase CLI:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   ```

CONFIGURAÇÃO VERCEL NECESSÁRIA:

1. Adicionar variáveis de ambiente no dashboard da Vercel:
   - Todas as variáveis do .env.local
   - Configurar secrets do Firebase
   - Configurar secrets do Stripe

2. Conectar repositório GitHub com Vercel:
   - Importar projeto
   - Configurar build settings
   - Configurar domain

3. Comandos para deploy:
   ```bash
   vercel
   # ou
   git push origin main # (com deploy automático configurado)
```*/
