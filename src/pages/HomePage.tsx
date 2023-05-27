import { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'
import { useMyDebounce } from '../hooks/debounce'

function HomePage() {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounce = useMyDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounce, { skip: debounce === '' })

  useEffect(() => {
    setDropdown(debounce !== '' && data?.length! > 0)
  }, [debounce, data])

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
          {dropdown && (
            <ul className="list-none absolute top-[58px] left-0 right-0 w-full max-h-[200px] shadow-md bg-white overflow-y-scroll">
              {isLoading && <p className="text-center">Loading...</p>}
              {data?.map((item) => (
                <li
                  key={item.id}
                  className="py-2 px-4 hover:bg-slate-500 hover:text-cyan-200 transition-colors cursor-pointer"
                >
                  {item.login}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
