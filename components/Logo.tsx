import Image from "next/image";
import React from "react";

function Logo({className}:{className?:string}) {
  return (
    <Image
      src={"/images/logo.svg"}
      alt="Alaska Logo"
      height={100}
      width={250}
      className={`${className}`}
    />
  );
}

export default Logo;
