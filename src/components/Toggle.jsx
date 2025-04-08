import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <SunIcon className="w-10 h-10 text-yellow-400" />
      ) : (
        <MoonIcon className="w-10 h-10 text-gray-600" />
      )}
    </button>
  )
}