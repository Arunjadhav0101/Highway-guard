"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import clsx from "clsx";
import navItems from "@/data/menuData";
import Link from "next/link";
import { TeamCard } from "./ui/navigation-menu";

function MobileNav({isOpen}:{isOpen:boolean}) {
  if (isOpen) {
    return (
      <div
        className={clsx(
          "mx-auto fixed top-0 left-0 w-full h-full bg-transparent z-30",
          isOpen ? "block lg:hidden" : "hidden"
        )}
      >
        <motion.div
          className="w-full h-full bg-white overflow-y-auto"
          initial={{ opacity: 0, translateY: "-100%" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-[95%] md:w-[90%] mx-auto flex flex-col py-4 pt-[100px] p-[5%] text-gray-700">
            {navItems.map((item, index) => {
              if (item.href) {
                return (
                  <Link href={item.href} key={index}>
                    <div className="font-semibold border-b border-gray-300 px-2 py-6">
                      {item.title}
                    </div>
                  </Link>
                );
              }
              return (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="font-semibold text-md border-b border-gray-300 px-2 py-6">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                        {item.title.toLocaleLowerCase()==="team" && <h3 className="font-semibold text-2xl mb-6 text-center pt-4">Meet The Team</h3>}
                      <ul className="grid md:grid-cols-2 mt-4 max-w-[500px] w-[95%] mx-auto gap-4">
                        {item.submenu &&
                          item.submenu.map((subItem, subIndex) => {
                            if (subItem?.img) {
                              return (
                                <li key={subIndex} className="row-span-3">
                                    <TeamCard src={subItem.img?.src as string} href={subItem.href} name={subItem.title} position={subItem.description} />
                                </li>
                              );
                            }
                            return (
                              <li key={subIndex} className="row-span-3">
                                <Link href={subItem.href}>
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    {subItem.title}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  }
  return null;
}

export default MobileNav;

