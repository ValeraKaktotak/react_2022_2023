import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

function FavoritePages() {
  const { favourites } = useAppSelector((state) => state.githubFavourite)
  const { removeFavourite } = useActions()
  const removeFromFavourite = (fav: string) => {
    removeFavourite(fav)
  }
  if (favourites.length === 0) return <p className="text-center">No item...</p>
  return (
    <>
      <div className="flex flex-col pt-10 mx-auto h-screen w-screen">
        <ul className="list-none w-full max-w-xl relative mx-auto">
          {favourites.map((item) => (
            <li
              className="flex flex-col border px-2 py-4 rounded mb-2 hover:bg-slate-400 hover:shadow-md transition-all cursor-pointer"
              key={item}
            >
              <a href={item} target="_blank" rel="noreferrer">
                {item}
              </a>
              <button
                className="px-2 py-4 rounded bg-red-600 hover: shadow-md transition-all"
                onClick={() => removeFromFavourite(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FavoritePages
