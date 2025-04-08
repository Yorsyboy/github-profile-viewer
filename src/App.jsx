import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import RepoList from './components/RepoList'

export default function App() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProfile = async (username) => {
    setLoading(true)
    setError(null)
    
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`)
      ])
      
      if (!profileRes.ok || !reposRes.ok) {
        throw new Error('User not found')
      }
      
      const profileData = await profileRes.json()
      const reposData = await reposRes.json()
      
      setProfile(profileData)
      setRepos(reposData)
    } catch (err) {
      setError(err.message)
      setProfile(null)
      setRepos([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">GitHub Profile Viewer</h1>
        <p className="text-center text-gray-600 mb-8">For recruiters to quickly review developer profiles</p>
        
        <SearchBar onSearch={fetchProfile} />
        
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-github-accent"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error} - Please check the username and try again
          </div>
        )}
        
        {profile && <ProfileCard profile={profile} />}
        {repos.length > 0 && <RepoList repos={repos} />}
      </div>
    </div>
  )
}
