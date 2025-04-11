import { dmSans } from "@/lib/fonts";
import Image from "next/image";
import solutionsData from "@/data/solutionsData";

function SolutionsSection() {
  return (
    <div className="container mx-auto bg-white py-12">
      <div className=" w-5/6 flex flex-col mx-auto items-center justify-center gap-8">
        <div className="text-center">
          <h2 className="text-primary text-xl font-medium">SOLUTIONS</h2>
          <h4 className={`text-4xl font-bold max-w-lg w-full pb-12 ${dmSans.className}`}>
            Revolutionary Features Driving Highway Cleanliness
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {
            solutionsData.map((solution, index) => (
              <div key={index} className="border-t-2 py-4">
                <div className="flex justify-start py-4">
                 <Image
                  src={solution.icon}
                  width={50}
                  height={50}
                  alt=""
                  className="p-1"
                />
                  </div>
                  <div className="h-24 "></div>
                <h3 className="text-2xl pr-4 font-semibold text-gray-800">
                  {solution.title}
                </h3>
                <p className="mt-6 text-lg">{solution.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SolutionsSection;
