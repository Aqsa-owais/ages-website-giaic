import Image from "next/image";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

export default function Services() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">{`Our Services`}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={pic2}
            width={300}
            height={200}
            alt="Educational Tours"
            className="w-full h-72"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{`Educational Tours`}</h2>
            <p>{`Immersive tours to historical sites from various ages.`}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={pic1}
            width={300}
            height={200}
            alt="Online Courses"
            className="w-full h-72"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{`Online Courses`}</h2>
            <p>
              {`In-depth online courses covering different historical periods.`}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={pic3}
            width={300}
            height={200}
            alt="Research Assistance"
            className="w-full h-72"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{`Research Assistance`}</h2>
            <p>{`Expert assistance for historical research projects.`}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={pic4}
            width={300}
            height={200}
            alt="Historical Reenactments"
            className="w-full h-72"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{`Historical Reenactments`}</h2>
            <p>{`Authentic reenactments of key events from various ages.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
