import { useState, useEffect } from 'react'

const useCustomStore = <T, F>(
  store: (selector: (store: T) => F) => F,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F | undefined>(undefined)

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useCustomStore;