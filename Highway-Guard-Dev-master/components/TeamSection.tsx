import { dmSans } from "@/lib/fonts";
import Image from "next/image";
const TeamMembers = [
  {
    name: "Aviraj Kawade",
    position: "CEO AND FOUNDER",
    src: "https://framerusercontent.com/images/0NTV1t6kDwIVC7Q9bE8JuR5g7xE.png",
  },
  {
    name: "Siddeshwar Tadage",
    position: "Associate Software Engineer",
    src: "https://framerusercontent.com/images/2XsWK8f528PmWK8ZuCJlY47kbQ.jpg",
  },
  {
    name: "Yash Kale",
    position: "CLoud Captain",
    src: "https://framerusercontent.com/images/NbslzAMPcsrsuvInrmrvPPS6PI.jpg",
  },
];
function TeamSection() {
  return (
    <div className="container mx-auto max-h-fit flex justify-center items-center py-24">
      <div className="h-full w-5/6 mx-auto flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-primary text-xl font-medium text-center">TEAM</h2>
          <h4
            className={`text-4xl lg:text-5xl font-bold w-full py-10 ${dmSans.className}`}
          >
            Meet the team
          </h4>
          <p className="text-xl text-muted-foreground px-12">
            Dedicated professionals driving innovation and sustainability,
            committed to enhancing highway safety and environmental stewardship
            through advanced Al technology and collaboration.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-12 mt-8">
          {TeamMembers.map((member, index) => (
            <div key={index} className="w-[320px] text-center mt-12">
              <div className="aspect-square w-[240px] rounded-3xl bg-yellow-200 mx-auto overflow-hidden">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={240}
                  height={240}
                  className="object-cover w-full h-full object-top"
                />
              </div>
              <div className="space-y-4 mt-6">
                <h4 className={`font-semibold text-2xl ${dmSans.className}`}>
                  {member.name}
                </h4>
                {/* <p className="text-xl">{member.position}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
