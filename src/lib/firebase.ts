import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "styleshare-12271.firebaseapp.com",
  projectId: "styleshare-12271",
  storageBucket: "styleshare-12271.appspot.com",
  messagingSenderId: "261409505884",
  appId: "1:261409505884:web:8f666d56c53c3ab2b31c99"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()