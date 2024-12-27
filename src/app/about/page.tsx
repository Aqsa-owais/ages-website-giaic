import Image from 'next/image'
import differntages from "../images/ironage.jpg"


export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">About Us</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image src={differntages} width={400} height={300} alt="About Us" className="rounded-lg shadow-md w-full h-60" />
        <div>  
          <p className="text-lg mb-4">
            {`We are passionate about exploring and sharing knowledge about different ages throughout human history. Our team of historians and researchers work tirelessly to bring you accurate and engaging content about various historical periods.`}
          </p>
          <p className="text-lg">
            {`From the Stone Age to the Modern Era, we cover it all. Our goal is to make history accessible and interesting for everyone, whether you're a student, a history buff, or just curious about the past.`}
          </p>
        </div>
      </div>
    </div>
  )
}