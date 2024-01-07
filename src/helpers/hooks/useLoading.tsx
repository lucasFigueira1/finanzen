import { useState } from "react"

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)

  const setLoading = (value: boolean) => setIsLoading(value)

  return {
    isLoading,
    setLoading
  }
}