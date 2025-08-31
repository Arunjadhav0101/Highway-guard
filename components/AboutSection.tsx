import { dmSans } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function AboutSection() {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto w-screen max-h-fit overflow-hidden py-24">
      <div className=" w-5/6 mx-auto flex flex-col gap-y-6">
        <div>
          <h2 className="text-primary text-lg">ABOUT US</h2>
          <h4 className={`text-4xl font-bold ${dmSans.className}`}>
            Pioneers in Highway Sustainability
          </h4>
        </div>
        <div className="text-lg text-justify">
          <p className="text-gray-500 mt-4">
            India&apos;s highways are vital for transportation and economic
            growth. However, indiscriminate littering from vehicles pollutes the
            environment, harms wildlife, and creates safety hazards. Current
            manual collection methods are inefficient.
          </p>
          <p className="text-gray-500 mt-4">
            Highway Guard, a revolutionary Al-powered system, automates
            real-time waste detection, fostering responsible disposal practices
            and significantly contributing to the Swachh Bharat Abhiyan (Clean
            India Mission). This document outlines the project&apos;s concept,
            functionalities, potential impact, and alignment with the Clean
            India mission.
          </p>
        </div>
        {/* <div className="max-w-[550px] w-full flex md:justify-center  flex-wrap md:flex-nowrap gap-6 mt-8 py-6">
          <div className="w-[200px] md:w-auto flex h-full flex-col items-baseline justify-end">
            <h4 className="text-4xl font-bold">32+</h4>
            <div className="text-gray-500 text-lg mt-4">
              Years in Al Innovation
            </div>
          </div>
          <div className="w-[200px] md:w-auto flex h-full flex-col items-baseline justify-end">
            <h4 className="text-4xl font-bold">20</h4>
            <div className="text-gray-500 text-lg mt-4">
              Clients Countries Worldwide
            </div>
          </div>
          <div className="w-[200px] md:w-auto flex h-full flex-col items-baseline justify-end">
            <h4 className="text-4xl font-bold">4000+</h4>
            <div className="text-gray-500 text-lg mt-4">
              Projects Successfully Implemented
            </div>
          </div>
        </div> */}
        <div>
          <Link className="text-primary" href="/about">
            <span className="border-b border-primary py-1 hover:mr-2 duration-200">Read More</span>
            <ArrowRight className="inline scale-90 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
