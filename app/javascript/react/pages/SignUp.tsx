import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '@/react/firebase/firebaseInit'

type Props = {}

// type State = {}

export const SignUp: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const create = () => {
    setLoading(true)
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
      <p>新規登録画面</p>
      {loading && <p>処理中</p>}
      <div>
        <input className="border" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      </div>
      <div>
        <input className="border" type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
      </div>
      <div>
        <button onClick={create}>登録する</button>
      </div>
      <Link to='/sign_in'>ログイン画面へ</Link>
    </>
  )
}
