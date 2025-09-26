import ProductsGrid from "@/components/product-grid";
import { Separator } from "@/components/ui/separator";
import { getImagePath } from "@/lib/image-path";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/alyssaxuu",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/svgs/twitter2-1.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alyssax/",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/svgs/linkedin-2.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/alyssaxuu",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/svgs/github-3.svg",
  },
];
export default function Home() {
  return (
    <main className="max-w-[1052px] mt-5 mx-auto p-6 sm:p-6 ">
      <header className="flex justify-center mb-[50px]">
        <nav
          className="flex items-center gap-x-2"
          aria-label="Social media links"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Jabir on ${link.name}`}
              className="opacity-60 transition-all duration-200 ease-in-out hover:opacity-100 hover:-translate-y-0.5"
            >
              <Image
                src={getImagePath(link.icon)}
                alt={`${link.name} logo`}
                width={18}
                height={18}
              />
            </a>
          ))}
        </nav>
      </header>
      <section className="container flex flex-col items-start text-left text-md max-w-md">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/svgs/logo-8.svg"
          alt="Jabir Logo"
          width={34}
          height={34}
          className="self-start"
        />
        <div className="flex flex-col text-[#9b9c9c] items-start text-left text-[17px] font-medium gap-y-4 max-w-3xl md:max-w-4xl my-3">
          <h1 className="">
            I'm <span className="text-white">Jabir </span>, a designer and
            developer building digital products.
          </h1>

          <p className="tracking">
            As a 🚀 I’ve built multiple products, freelanced, worked at
            startups, and now I’m building
            <span className="text-white"> AssureQA</span>— an AI-powered
            automation platform for smarter software testing ✌.
          </p>
          <a
            href="mailto:hi@alyssax.com"
            className="text-lg text-primary hover:text-link-hover transition-colors"
          >
            Hire me <span className="inline-block">↗</span>
          </a>
        </div>
      </section>

      <div className="my-8">
        <div className="text-sm font-bold flex items-center gap-5 my-4">
          <div className="relative text-white cursor-pointer">Products</div>
          <div className="flex items-center gap-2 text-gray-500 transition-colors duration-200 ease-in-out hover:text-white">
            Stack
          </div>
        </div>
        <Separator />
      </div>

      <ProductsGrid />
      {/* 
        
     
        
      
        
        <section className="py-20">
          <WorkExperienceSection />
        </section>
        
        <section className="py-20">
          <NewsletterSection />
        </section>
         */}
      <footer className="w-full mt-16 text-muted-foreground">
        <hr className="border-border" />
        <div className="flex items-center justify-between py-8">
          <div className="text-sm font-normal ">Jabir © 2025</div>
          <div className="text-base">👻</div>
        </div>
      </footer>
    </main>
  );
}
