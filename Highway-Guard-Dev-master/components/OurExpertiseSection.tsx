import Image from "next/image";
import { Button } from "./ui/button"; // Import the Button component
import { dmSans } from "@/lib/fonts";
function OurExpertiseSection() {
  return (
    <section className="max-h-fit w-full mx-auto py-24 bg-gray-50">
      {/* Expertise Section 1 */}
      <div className="container mx-auto xpy-16 bg-gray-50">
        <div className="w-5/6 mx-auto grid cols-1 lg:flex justify-between items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2
                className={`text-4xl font-bold tracking-tight ${dmSans.className}`}
              >
                Our Expertise
              </h2>
              <p className="text-lg text-gray-600">
                Expertise in AI solutions for sustainable waste management and
                enhancing environmental safety on highways.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Image
                  alt=""
                  src={"/sparkle.svg"}
                  width={40}
                  height={40}
                  className="w-12"
                />

                <p className="text-lg">
                  AI & ML Solutions - Harnessing the cosmic power of Machine
                  Learning and Artificial Intelligence, we create innovative
                  reality from abstract ideas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  alt=""
                  src={"/sparkle.svg"}
                  width={40}
                  height={40}
                  className="w-12"
                />{" "}
                <p className="text-lg">
                  NVIDIA-powered App - Rendering NVIDIA&apos;s advanced tech, we
                  deliver high-performance AI-powered applications that keep you
                  ahead in the game.
                </p>
              </div>
            </div>
            <Button className="w-[180px] font-semibold py-8 rounded-2xl">
              Get in touch
            </Button>
          </div>
          <div className="relative md:h-[400px] w-full  lg:max-w-[50%] border-2 border-gray-300 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden lg:ml-10 p-2 md:p-4 ">
            <div className="rounded-3xl max-h-full overflow-hidden">
              <Image
                src="/images/car-detect1.png"
                alt="Our Expertise"
                width={800}
                height={611}
                className="rounded-[2rem] w-full h-full border object-cover"
              />
              <div className="w-[70%] h-[100px] bg-white border border-gray-300 rounded-[2rem] md:rounded-[2.7rem] absolute bottom-0 left-0 overflow-visible">
                <div className="flex items-center w-[90%] mx-auto h-full gap-4">
                  <div>
                  <Image alt="" src={"/icons/sparkle.svg"} width={10} height={10} className="w-6" />
                  </div>
                  <div className="flex flex-col gap-4 w-5/6">
                    <div className="bg-gray-300 w-[50%] h-5 rounded-xl border"></div>
                    <div className="bg-gray-300 w-[80%] h-5 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExpertiseSection;
