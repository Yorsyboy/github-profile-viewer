import { createContext, useContext, useState } from 'react'

const SearchHistoryContext = createContext()

export function SearchHistoryProvider({ children }) {
  const [history, setHistory] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('githubSearchHistory')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const addToHistory = (username) => {
    setHistory(prev => {
      const newHistory = [
        username,
        ...prev.filter(item => item !== username)
      ].slice(0, 5)
      
      // Save to localStorage
      localStorage.setItem('githubSearchHistory', JSON.stringify(newHistory))
      return newHistory
    })
  }

  return (
    <SearchHistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  )
}

export const useSearchHistory = () => useContext(SearchHistoryContext)