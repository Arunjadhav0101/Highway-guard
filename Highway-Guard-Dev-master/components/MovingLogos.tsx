import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingLogos() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden mx-auto my-12">
      <InfiniteMovingCards items={logos} direction="left" speed="normal" />
    </div>
  );
}

const logos = [
  {
    name: "Nasscom",
    src: "/images/nasscom-startups.png",
  },
  {
    name: "Microsoft",
    src: "/images/ms-founders-hub.png",
  },
];
