import Image from "next/image";
import { Button } from "./ui/button";
import { MovingLogos } from "./MovingLogos";
import { dmSans } from "@/lib/fonts";
import Link from "next/link";

function HeroSection() {
  return (
    <section>
      <div className="container mx-auto flex flex-col justify-center items-center w-screen lg:max-h-[1400px] overflow-hidden mt-4">
        <div className="w-5/6 flex justify-normal items-center flex-wrap">
          <div className="w-full lg:w-4/6 flex flex-col gap-y-4 md:gap-y-8">
            <h2 className="w-5/6 font-semibold text-2xl text-gray-700">
              India&apos;s Biggest <span className="">Machine Learning </span>
              Project, Presenting
            </h2>
            <h1
              className={`font-bold text-[calc(2vw+2.5rem)] md:text-7xl text-left ${dmSans.className} antialiased`}
            >
              Highway Guard
            </h1>
            <p className="text-xl font-medium text-gray-500 text-left">
              Next Gen Waste Detection for Swatch Bharat
            </p>
            <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-4">
              <Button className="font-semibold w-full md:w-auto">
                Watch demo video
              </Button>
              <Link href="#contact" className="w-full md:w-auto" passHref>
              <Button
                className="font-semibold w-full md:w-auto"
                variant={"outline"}
              >
                Get in Touch
              </Button>
              </Link>
             
            </div>
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-1/3 flex justify-between">
            <div className="hidden w-full md:block lg:hidden "></div>
            <div className="w-full grid items-center justify-center grid-cols-3 gap-1 p-3">
              {heroSectionImages.map((image, idx) => (
                <ImageCard image={image} index={idx} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <MovingLogos />
    </section>
  );
}

export default HeroSection;

const ImageCard = ({
  image,
  index,
}: {
  image: {
    alt: string;
    src: string;
    isImg: boolean;
    element: React.ReactNode | null;
  };
  index: number;
}) => {
  return (
    <div key={index} className="flex justify-center items-center">
      {image.isImg ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={120}
          height={120}
          className="rounded-[2rem] w-[120px] aspect-square"
        />
      ) : (
        image.element ?? (
          <div className="w-20 h-20 bg-green-800 rounded-[2rem]"></div>
        )
      )}
    </div>
  );
};

const heroSectionImages = [
  {
    alt: "Highway at sunset",
    src: "",
    isImg: false,
    element: <div className="bg-transparent w-20 h-20"></div>,
  },
  {
    alt: "Busy highway",
    src: "/images/hero-image1.png",
    isImg: true,
    element: null,
  },
  {
    alt: "Highway in the mountains",
    src: "/images/innovation.png",
    isImg: true,
    element: null,
  },
  {
    alt: "Empty highway",
    src: "/highway.jpg",
    isImg: false,
    element: (
      <div className="bg-gray-200 w-20 h-20 rounded-[1.5rem] relative">
        <div className="w-[40%] aspect-square rounded-[12px] bg-primary absolute -right-1 top-[-10px] rotate-[25deg]"></div>
      </div>
    ),
  },
  {
    alt: "Highway at sunset",
    src: "/images/hero3.png",
    isImg: true,
    element: null,
  },
  {
    alt: "Busy highway",
    src: "/images/hero4.png",
    isImg: true,
    element: null,
  },
  {
    alt: "Highway in the mountains",
    src: "/images/hero5.png",
    isImg: true,
    element: null,
  },
  {
    alt: "Empty highway",
    src: "/images/hero6.png",
    isImg: true,
    element: null,
  },
  {
    alt: "Empty highway",
    src: "/images/hero7.png",
    isImg: true,
    element: null,
  },
];
