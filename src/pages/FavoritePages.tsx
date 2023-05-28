import { useAppSelector } from '../hooks/redux'

function FavoritePages() {
  const { favourites } = useAppSelector((state) => state.githubFavourite)
  if (favourites.length === 0) return <p className="text-center">No item...</p>
  return (
    <>
      <div className="flex flex-col pt-10 mx-auto h-screen w-screen">
        <ul className="list-none w-full max-w-xl relative mx-auto">
          {favourites.map((item) => (
            <li
              className="border px-2 py-4 rounded mb-2 hover:bg-slate-400 hover:shadow-md transition-all cursor-pointer"
              key={item}
            >
              <a href={item} target="_blank" rel="noreferrer">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FavoritePages
