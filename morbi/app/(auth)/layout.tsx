import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header showAuthButtons={true} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}