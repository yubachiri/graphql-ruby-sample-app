import firebase from '@/react/firebase/firebaseInit'
import { useState } from 'react'

export const useCurrentUser = () => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [idToken, setIdToken] = useState<string>('')

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user)
      user.getIdToken(true)
        .then(idToken => {
          setIdToken(idToken)
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      setUser(null)
    }
  })

  const logout = () => {
    if(user) {
      firebase.auth().signOut()
        .then(() => {
          console.log('logout')
          setUser(null)
          setIdToken('')
        })
        .catch(error => {
          console.error(error)
          setUser(null)
          setIdToken('')
        })
    }
  }

  return { user, idToken, logout }
}
