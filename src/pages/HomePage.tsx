import { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'
import { useMyDebounce } from '../hooks/debounce'

function HomePage() {
  const [search, setSearch] = useState('')
  const debounce = useMyDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounce)

  useEffect(() => {
    console.log(debounce)
  }, [debounce])

  return (
    <>
      <div className="flex flex-col pt-10 mx-auto h-screen w-screen">
        {isError && <p className="text-center text-red-600">Something went wrong!!!</p>}
        <div className="w-full max-w-xl relative mx-auto">
          <input
            type="text"
            className="border rounded-xl border-sky-700 px-2 py-4 w-full mb-4"
            placeholder="Search Github's username... "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute top-[58px] left-0 right-0 w-full max-h-[200px] shadow-md bg-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, totam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Est beatae, quisquam fuga nihil voluptas dolorem?
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
