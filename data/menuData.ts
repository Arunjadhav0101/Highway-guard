interface MenuItem {
    title: string;
    description?: string;
    href: string;
    type?: string;
    img?: Image;
}

interface Image {
    src: string;
    alt: string;
}

interface Menu {
    title: string;
    submenu?: MenuItem[];
    href?: string;
}

const menu: Menu[] = [
    {
        title: "Features",
        submenu: [
            {
                type: "",
                title: "shadcn/ui",
                description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
                href: "/"
            },
            {
                title: "Introduction",
                description: "Re-usable components built using Radix UI and Tailwind CSS.",
                href: "/about"
            },
            {
                title: "Installation",
                description: "How to install dependencies and structure your app.",
                href: "/docs/installation"
            },
            {
                title: "Typography",
                description: "Styles for headings, paragraphs, lists...etc",
                href: "/docs/primitives/typography"
            }
        ]
    },
    {
        title: "Case Studies",
        submenu: [
            {
                title: "Introduction",
                description: "Re-usable components built using Radix UI and Tailwind CSS.",
                href: "/docs"
            },
            {
                title: "Installation",
                description: "How to install dependencies and structure your app.",
                href: "/docs/installation"
            },
            {
                title: "Typography",
                description: "Styles for headings, paragraphs, lists...etc",
                href: "/docs/primitives/typography"
            }
        ]
    },
    {
        title: "Team",
        submenu: [
            {
                type: "card",
                title: "Aviraj Kawade",
                description: "Founder & CEO",
                href: "/",
                img: {
                    src: "https://framerusercontent.com/images/0NTV1t6kDwIVC7Q9bE8JuR5g7xE.png",
                    alt: "Aviraj Kawade"
                }
            },
      
        ]
    },
    {
        title: "English",
        href: "/english"
    },
    {
        title: "Support",
        href: "/support"
    }
];

export default menu;