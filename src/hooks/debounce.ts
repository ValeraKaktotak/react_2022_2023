import { useEffect, useState } from 'react'

export function useMyDebounce(value: string, delay = 500): string {
  const [searchValue, setSearchValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(value)
    }, delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return searchValue
}
