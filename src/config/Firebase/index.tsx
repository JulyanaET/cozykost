// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Tambahkan ini
import AsyncStorage from "@react-native-async-storage/async-storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-7aM0QtBHJbhJl6cqZZXxJG65l0kWO1Y",
  authDomain: "cozykost-4f305.firebaseapp.com",
  projectId: "cozykost-4f305",
  storageBucket: "cozykost-4f305.firebasestorage.app",
  messagingSenderId: "770469474304",
  appId: "1:770469474304:web:959dc93b0eb3fa3d8d68e5"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app); // Tambahkan inisialisasi Firestore

export { app, auth, firestore };