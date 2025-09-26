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
    <main className="max-w-[1052px] mt-5 mx-auto">
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
              aria-label={`Follow Alyssa X on ${link.name}`}
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
          alt="Alyssa X Logo"
          width={34}
          height={34}
          className="self-start"
        />
        <div className="flex flex-col text-[#9b9c9c] items-start text-left text-[17px] font-medium gap-y-4 max-w-3xl md:max-w-4xl my-3">
          <h1 className="leading-tight tracking-tight">
            I'm <span className="text-white">Alyssa X</span>, a designer,
            developer, and serial maker.
          </h1>
          <p className="leading-relaxed">
            As a 🦄 I've built and shipped{" "}
            <span className="text-white">12+ products</span> (with over 160K
            users), been 2 times a Product Hunt{" "}
            <span className=" text-white">Maker of The Year</span> finalist, and
            much more ✌
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
      <footer className="w-full mt-16">
        <hr className="border-border" />
        <div className="flex items-center justify-between py-8">
          <div className="text-sm font-normal text-muted-white">
            Alyssa X © 2025
          </div>
          <div className="text-base">👻</div>
        </div>
      </footer>
    </main>
  );
}
