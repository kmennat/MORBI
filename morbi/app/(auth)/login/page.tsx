'use client'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-[#00cc7e]  p-8 w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white mb-6">Log in</h1>
        </div>
        
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-white bg-transparent rounded-lg text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm"
            />
          </div>
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-white bg-transparent rounded-lg text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pr-12 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          
          <div className="text-center pt-2">
            <a href="#" className="text-white text-sm italic hover:underline">
              Forgot password?
            </a>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-white text-[#00cc7e] py-3 px-4 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200"
            >
              log in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}