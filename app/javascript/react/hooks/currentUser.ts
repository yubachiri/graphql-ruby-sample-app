import firebase from '@/react/firebase/firebaseInit'
import { useState } from 'react'

export const useCurrentUser = () => {
  const [user, setUser] = useState<firebase.User | null>(null)

  firebase.auth().onAuthStateChanged(user => {
    console.log('called')
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })

  return { user }
}
