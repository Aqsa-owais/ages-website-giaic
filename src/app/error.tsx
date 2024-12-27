// 'use client'

// import { useEffect } from 'react'

// export default function Error({
//   error,
//   reset,
// }: {
//   error: Error
//   reset: () => void
// }) {
//   useEffect(() => {
//     console.error(error)
//   }, [error])

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-center">
//       <h1 className="text-4xl font-bold mb-4">{`Oops! Something went wrong.`}</h1>
//       <p className="text-xl mb-8">{`We apologize for the inconvenience. Please try again later.`}</p>
//       <button
//         onClick={() => reset()}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Try again
//       </button>
//     </div>
//   )
// }