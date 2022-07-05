import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQAHZ1tgFm1oenjQQrH24sMZp4HgSFqm0",
    authDomain: "clone-5d962.firebaseapp.com",
    projectId: "clone-5d962",
    storageBucket: "clone-5d962.appspot.com",
    messagingSenderId: "309014682499",
    appId: "1:309014682499:web:99dbad2dbba1678a97f4b6",
    measurementId: "G-SZQ1N4M2HZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
