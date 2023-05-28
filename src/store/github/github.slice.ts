import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const LS_FAV_KEY = 'rfk'

interface GitHubState {
  favourites: string[]
}

const initialState: GitHubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((item) => item !== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
  },
})

export const gitHubActions = githubSlice.actions
export const gitHubReducer = githubSlice.reducer