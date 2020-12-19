import React from 'react'
import { Link } from 'react-router-dom'
import { useCurrentUser } from '@/react/hooks/currentUser'

type Props = {}

// type State = {}

export const Index: React.FC<Props> = () => {
  const { user } = useCurrentUser()

  return (
    <>
      {user ? (
        <>
          <p>ログイン中</p>
          <Link to='/user'>ユーザー詳細</Link>
        </>
      ) : (
        <>
          <Link to="/sign_up">sign up</Link>
          <Link to="/sign_in">sign in</Link>
        </>
      )}
    </>
  )
}
