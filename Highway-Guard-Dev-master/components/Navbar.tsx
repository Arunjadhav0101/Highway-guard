import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  TeamCard,
} from "@/components/ui/navigation-menu"; 

import navItems from "@/data/menuData"
import clsx from "clsx";

const Navbar = () => {
  return (
    <div className=" hidden lg:flex justify-center items-center gap-12 ">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.submenu ? (
                <>
                  <NavigationMenuTrigger className="text-gray-700 text-md">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                      
                      {item.title.toLocaleLowerCase()==="team" && <h3 className="font-semibold text-xl text-center pt-4">Meet The Team</h3>}
                    <ul className={clsx("p-4 lg:min-w-[500px] lg:grid-cols-[1fr_1fr]", item.title.toLocaleLowerCase()==="team" ? "align-middle" : "grid gap-3 ")}>
                      {item.submenu.map((subItem, subIndex) =>
                        subItem.type === "card" ? (
                          <li key={subIndex} className="row-span-3">
                            <NavigationMenuLink asChild>
                              <TeamCard src={subItem.img?.src as string} href={subItem.href} name={subItem.title} position={subItem.description} />
                            </NavigationMenuLink>
                          </li>
                        ) : (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            title={subItem.title}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                           <div className="text-sm font-medium leading-none text-md">{subItem.title}</div>
                           <p className=" text-gray-700 text-sm"> {subItem.description}</p>
                           
                          </Link>
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href as string}>
                  <span className="px-3 text-md text-gray-700 font-medium">
                    {item.title}
                  </span>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
