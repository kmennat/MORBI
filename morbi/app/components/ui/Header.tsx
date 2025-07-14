'use client'

import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'

interface HeaderProps {
  showAuthButtons: boolean
}

export default function Header({ showAuthButtons }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
           <div className="flex items-center">
                     <Image
                       src="/logo.png"
                       alt="Logo"
                       width={120}
                       height={40}
                       className="h-8 w-auto"
                     />
                   </div>
          </Link>
          
          {/* Auth buttons or user menu */}
          {showAuthButtons ? (
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/login">log in</Link>
              </Button>
              <Button variant="primary" asChild>
                <Link href="/register">register</Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome back!</span>
              <Button variant="outline">
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}