import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Autogenerated return type of Chat */
export type ChatPayload = {
  __typename?: 'ChatPayload';
  messages: Array<Scalars['String']>;
};

/** Autogenerated input type of EditUser */
export type EditUserInput = {
  userId: Scalars['ID'];
  example?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of EditUser */
export type EditUserPayload = {
  __typename?: 'EditUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  editUser?: Maybe<EditUserPayload>;
  say?: Maybe<SayPayload>;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationSayArgs = {
  input: SayInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of Say */
export type SayInput = {
  text: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of Say */
export type SayPayload = {
  __typename?: 'SayPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  chat: ChatPayload;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type SayMutationVariables = {
  input: SayInput;
};


export type SayMutation = (
  { __typename?: 'Mutation' }
  & { say?: Maybe<(
    { __typename?: 'SayPayload' }
    & Pick<SayPayload, 'completed'>
  )> }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type ChatSubscriptionVariables = {};


export type ChatSubscription = (
  { __typename?: 'Subscription' }
  & { chat: (
    { __typename?: 'ChatPayload' }
    & Pick<ChatPayload, 'messages'>
  ) }
);


export const SayDocument = gql`
    mutation say($input: SayInput!) {
  say(input: $input) {
    completed
  }
}
    `;

/**
 * __useSayMutation__
 *
 * To run a mutation, you first call `useSayMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSayMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSayMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSayMutation(options: VueApolloComposable.UseMutationOptionsWithVariables<SayMutation, SayMutationVariables>) {
            return VueApolloComposable.useMutation<SayMutation, SayMutationVariables>(SayDocument, options);
          }
export type SayMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SayMutation, SayMutationVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    email
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a Vue component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCurrentUserQuery(
 *   {
 *   }
 * );
 */
export function useCurrentUserQuery(options: VueApolloComposable.UseQueryOptions<CurrentUserQuery, CurrentUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CurrentUserQuery, CurrentUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CurrentUserQuery, CurrentUserQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<CurrentUserQuery, undefined>(CurrentUserDocument, undefined, options);
          }
export type CurrentUserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CurrentUserQuery, CurrentUserQueryVariables>;
export const ChatDocument = gql`
    subscription chat {
  chat {
    messages
  }
}
    `;

/**
 * __useChatSubscription__
 *
 * To run a query within a Vue component, call `useChatSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useChatSubscription(
 *   {
 *   }
 * );
 */
export function useChatSubscription(options: VueApolloComposable.UseSubscriptionOptions<ChatSubscription, ChatSubscriptionVariables> | VueCompositionApi.Ref<VueApolloComposable.UseSubscriptionOptions<ChatSubscription, ChatSubscriptionVariables>> | ReactiveFunction<VueApolloComposable.UseSubscriptionOptions<ChatSubscription, ChatSubscriptionVariables>> = {}) {
          return VueApolloComposable.useSubscription<ChatSubscription, undefined>(ChatDocument, undefined, options);
        }
export type ChatSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<ChatSubscription, ChatSubscriptionVariables>;