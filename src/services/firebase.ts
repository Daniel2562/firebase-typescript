import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export const fetchRole = async (id: string) => {
  try {
    const querySnapshot = await getDoc(doc(db, 'users', id))
    return querySnapshot.data()?.role || 'user'
  } catch (error) {
    return 'user'
  }
}
