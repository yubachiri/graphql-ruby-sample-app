import { useResult } from '@vue/apollo-composable'
import { useCurrentUserQuery } from '@/graphql/types'

export const useCurrentUser = () => {
  const { result, loading } = useCurrentUserQuery()
  const currentUser = useResult(result, null, (data) => data.currentUser)

  return { currentUser, loading }
}
