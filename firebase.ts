import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFK2LymFy1fzjZAMzv6UePQxqN5FrT3A8",
  authDomain: "my-chat-gpt-47ec5.firebaseapp.com",
  projectId: "my-chat-gpt-47ec5",
  storageBucket: "my-chat-gpt-47ec5.appspot.com",
  messagingSenderId: "915067132636",
  appId: "1:915067132636:web:b808b5d117c12223c27219",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
