"use client";

import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1";
import { Book, Sunset, Trees, Zap } from "lucide-react";

export default function SiteHeader() {
  const brandData = {
    logo: {
      url: "/",
      src: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=150&auto=format&fit=crop",
      alt: "Ajit Agarwal & Associates Logo",
      title: "Ajit Agarwal & Associates",
    },
    menu: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Services",
        url: "/services",
        items: [
          {
            title: "Audit & Assurance",
            description: "Precision auditing for your business",
            icon: <Book className="size-5 shrink-0" />,
            url: "/services",
          },
          {
            title: "Strategic Tax",
            description: "Tax advisory leadership",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/services",
          },
          {
            title: "Corporate Finance",
            description: "Financial governance focus",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "/services",
          },
        ],
      },
      {
        title: "Team",
        url: "/team",
      },
      {
        title: "Contact",
        url: "/contact",
      }
    ],
    mobileExtraLinks: [
      { name: "Services", url: "/services" },
      { name: "Contact", url: "/contact" },
    ],
    auth: {
      login: { text: "Home", url: "/" },
      signup: { text: "Book Consultation", url: "/contact" },
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <Navbar1 {...brandData} />
    </header>
  );
}
