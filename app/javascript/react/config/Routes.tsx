import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Index } from '../pages/Index'
import { SignIn } from '@/react/pages/SignIn'
import { SignUp } from '@/react/pages/SignUp'
import { ShowUser } from '@/react/pages/ShowUser'

type Props = {}

// type State = {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path="/sign_in">
        <SignIn />
      </Route>
      <Route exact path="/sign_up">
        <SignUp />
      </Route>
      <Route exact path="/user">
        <ShowUser />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  )
}
