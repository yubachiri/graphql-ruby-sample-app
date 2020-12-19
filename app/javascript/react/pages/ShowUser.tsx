import React from 'react'
import { useCurrentUserQuery } from '@/react/graphql'

type Props = {}

// type State = {}

export const ShowUser: React.FC<Props> = () => {
  const { data, refetch } = useCurrentUserQuery()

  return (
    <>
      <p>RailsからUserを取得するページ</p>
      <p>{data && JSON.stringify(data)}</p>
      <button onClick={() => {
        refetch()
      }}>refetch</button>
    </>
  )
}
