import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center space-x-8">
            <span className="text-sm">© MORBI 2021</span>
            <nav className="flex space-x-8">
              <Link href="#" className="text-sm hover:text-gray-300">AGB</Link>
              <Link href="#" className="text-sm hover:text-gray-300">Impressum</Link>
              <Link href="#" className="text-sm hover:text-gray-300">MORBI group</Link>
              <Link href="#" className="text-sm hover:text-gray-300">Contact</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-600 rounded text-sm hover:bg-gray-800">
                EN
              </button>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm hover:text-gray-300">GTC</Link>
              <Link href="#" className="text-sm hover:text-gray-300">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
