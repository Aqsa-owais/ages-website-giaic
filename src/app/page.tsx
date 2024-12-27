import Image from 'next/image'
import agestone from "../app/images/stoneage.jpg"
import bronzeage from "../app/images/bronzeage.jpg"
import differnetages from "../app/images/differnetages.jpg"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to the Ages Website</h1>
      <p className="text-xl">{`Explore different ages through time.`}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={agestone} width={300} height={900} alt="Stone Age" className="w-full h-72" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Stone Age</h2>
            <p>The earliest known period of human culture.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={bronzeage} width={300} height={200} alt="Bronze Age" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Bronze Age</h2>
            <p>The period characterized by the use of bronze.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={differnetages} width={300} height={200} alt="Iron Age" className="w-full h-72" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Iron Age</h2>
            <p>The period characterized by the widespread use of iron.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
