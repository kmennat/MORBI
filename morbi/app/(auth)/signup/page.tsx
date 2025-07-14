"use client"
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 lg:px-16 py-8 lg:py-0">
        <div className="w-full max-w-md">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Sign up now</h1>
            <p className="text-gray-600 text-sm">It's free and only takes two minutes.</p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00cc7e] focus:border-transparent text-sm"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00cc7e] focus:border-transparent text-sm"
              />
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00cc7e] focus:border-transparent pr-12 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="pt-2">
              <p className="text-xs text-gray-600 mb-4 sm:mb-6">
                By signing up you accept MORBI'S{' '}
                <span className="text-[#00cc7e] cursor-pointer hover:text-emerald-600">GTC</span>
                {' '}and{' '}
                <span className="text-[#00cc7e] cursor-pointer hover:text-emerald-600">Privacy Policy</span>.
              </p>
            </div>
            
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#00cc7e] hover:bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors duration-200 active:bg-emerald-700"
            >
              continue
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Hero text */}
      <div className="w-1/2 flex items-center justify-center px-16 bg-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-0">
            Connect with the<br />
            best to create<br />
            your <span className="text-[#00cc7e]">dream team</span>
          </h2>
        </div>
      </div>
    </div>
  )
}