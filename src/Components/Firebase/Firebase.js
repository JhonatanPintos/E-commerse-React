import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDxiS19gatciR1v0YGjKlsFxs7Xk2ezzJ8",
  authDomain: "e-commerse-react.firebaseapp.com",
  projectId: "e-commerse-react",
  storageBucket: "e-commerse-react.appspot.com",
  messagingSenderId: "564705980792",
  appId: "1:564705980792:web:2ea8f528ddb8ea0977988d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)