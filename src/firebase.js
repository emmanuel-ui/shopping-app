import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC48ibulTSl68A259TYVqLMAtXNdnjgxdQ",
  authDomain: "shopping-app-4dbd5.firebaseapp.com",
  projectId: "shopping-app-4dbd5",
  storageBucket: "shopping-app-4dbd5.appspot.com",
  messagingSenderId: "1001875930258",
  appId: "1:1001875930258:web:0db94c53391a6549c2ba4b",
  measurementId: "G-DFLMTKY69D"
};

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
