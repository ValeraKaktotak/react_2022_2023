import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ServerResponse, User } from '../../models/models'

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<User[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<User>) => response.items,
    }),
  }),
})

export const { useSearchUsersQuery } = githubApi
