
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCnl_d9FBswDON2xISV5trrCMgw9wmF4wg",
  authDomain: "plantshop-4dccf.firebaseapp.com",
  projectId: "plantshop-4dccf",
  storageBucket: "plantshop-4dccf.appspot.com",
  messagingSenderId: "276653267468",
  appId: "1:276653267468:web:4873e1309ae534c0d32c29"
};

//initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)


export default app;