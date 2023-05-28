import { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { UserRepo } from '../models/models'

export function RepoCard({ repo }: { repo: UserRepo }) {
  const { addFavourite, removeFavourite } = useActions()
  const { favourites } = useAppSelector((state) => state.githubFavourite)
  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFav(true)
  }
  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }
  return (
    <>
      <div className="border px-2 py-4 rounded mb-2 hover:bg-slate-400 hover:shadow-md transition-all">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          <h2 className="text-lg font-bold">{repo.full_name}</h2>
          <p className="text-sm">
            Forks: <span className="font-bold mb-2">{repo.forks}</span>
            Watchers: <span className="font-bold mb-2">{repo.watchers}</span>
          </p>
          <p className="text-sm font-thin">
            <span>{repo?.description}</span>
          </p>
        </a>
        <div className="flex justify-between mt-4">
          {!isFav && (
            <button className="px-2 py-4 rounded bg-green-600 hover: shadow-md transition-all" onClick={addToFavourite}>
              Add
            </button>
          )}
          {isFav && (
            <button
              className="px-2 py-4 rounded bg-red-600 hover: shadow-md transition-all"
              onClick={removeFromFavourite}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </>
  )
}
