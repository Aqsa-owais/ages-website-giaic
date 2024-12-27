import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back to Home
      </Link>
    </div>
  )
}