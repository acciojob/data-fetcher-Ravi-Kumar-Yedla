import React, { useState, useEffect } from 'react'

const API_URL = "https://dummyjson.com/products"

const DataFetcher = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          alert('network is not responding')
        }
        const result = await response.json()
        setData(result)

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  if (loading) {
    <p>Loading...</p>
  }
  if (error) {
    <p>Error:{error}</p>
  }
  return (
    <div>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DataFetcher
