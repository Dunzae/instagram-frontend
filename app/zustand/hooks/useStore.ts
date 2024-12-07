import { useState, useEffect } from 'react'

const useCustomStore = <T, F>(
  store: (selector: (store: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    if(typeof result === "function") setData(() => result)
    else setData(result)
  }, [result])

  return data
}

export default useCustomStore;