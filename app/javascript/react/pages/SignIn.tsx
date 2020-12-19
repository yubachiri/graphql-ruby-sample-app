import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '@/react/firebase/firebaseInit'

type Props = {}

// type State = {}

export const SignIn: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const signIn = () => {
    setLoading(true)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user)
        setLoading(false)
      })
      .catch(error => {
        console.error('sign in failed', error)
        setLoading(false)
      })
  }

  return (
    <>
      <p>ログイン画面</p>
      {loading && <p>処理中</p>}
      <div>
        <input className="border" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      </div>
      <div>
        <input className="border" type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
      </div>
      <div>
        <button onClick={signIn}>ログインする</button>
      </div>
      <Link to='/sign_up'>新規登録画面へ</Link>
    </>
  )}
