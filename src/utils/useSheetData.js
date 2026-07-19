import { useEffect, useState } from 'react'
import { fetchSheetData } from './sheetFetcher'

/**
 * Hook generik untuk mengambil satu sheet CMS dan mengelola
 * state loading / error / data-nya.
 *
 * @param {string} url - URL CSV publish-to-web.
 * @returns {{ data: Array<Object>, isLoading: boolean, isError: boolean, errorMessage: string|null }}
 */
export function useSheetData(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function load() {
      setIsLoading(true)
      setIsError(false)
      setErrorMessage(null)

      try {
        const rows = await fetchSheetData(url)
        if (isMounted) setData(rows)
      } catch (err) {
        if (isMounted) {
          setIsError(true)
          setErrorMessage(err.message || 'Gagal memuat data.')
        }
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    load()

    return () => {
      isMounted = false
    }
  }, [url])

  return { data, isLoading, isError, errorMessage }
}
