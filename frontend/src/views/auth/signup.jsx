import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown } from 'lucide-react';

// Header Component
export const Header = () => {
  return (
    <header className="bg-white px-6 py-4 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-800">
            M<span className="bg-green-500 text-white px-1 rounded">S</span>RBI
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
            log in
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            register
          </button>
        </div>
      </div>
    </header>
  );
};


// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-sm">© MORBI 2021</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">AGB</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">Impressum</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">MORBI group</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded">
              <span className="text-sm">EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">GTC</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Signup Component
 export const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-4xl flex items-center justify-between">
        {/* Left Side - Form */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Sign up now</h1>
            <p className="text-gray-600 mb-8">It's free and only takes two minutes.</p>
            
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              <div className="text-sm text-gray-600">
                By signing up you accept MORBI's{' '}
                <a href="#" className="text-green-500 hover:text-green-600">GTC</a>
                {' '}and{' '}
                <a href="#" className="text-green-500 hover:text-green-600">Privacy Policy</a>.
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 text-white py-3 rounded font-medium hover:bg-green-600 transition-colors"
              >
                continue
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Side - Marketing Text */}
        <div className="hidden lg:block ml-16">
          <div className="text-right">
            <h2 className="text-4xl font-light text-gray-800 leading-tight mb-4">
              Connect with the<br />
              best to create<br />
              your <span className="text-green-500 font-normal">dream team</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

