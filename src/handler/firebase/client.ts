// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app"

export const firebaseClient = (): FirebaseApp => {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID
  }

  return initializeApp(firebaseConfig)
}
