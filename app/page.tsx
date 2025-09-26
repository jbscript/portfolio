import ProductsGrid from "@/components/product-grid";
import Image from "next/image";
import { Github, Mail, Globe, Dribbble, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getImagePath } from "@/lib/image-path";
import Navigation from "@/components/navigation";

export default function Home() {
  const classes =
    "size-4 text-muted-foreground hover:text-foreground transition-colors";

  return (
    <main className="max-w-[1052px] mt-5 mx-auto px-6 lg:px-0">
      <header className="flex justify-center mb-[50px]">
        <nav
          className="flex items-center gap-x-2"
          aria-label="Social media links"
        >
          <div className="flex items-center gap-3">
            <a
              aria-label="Twitter"
              href="https://x.com"
              className={classes}
            >
              <Twitter className="size-4" />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com"
              className={classes}
            >
              <Github className="size-4" />
            </a>
            <a
              aria-label="Dribbble"
              href="https://dribbble.com"
              className={classes}
            >
              <Dribbble className="size-4" />
            </a>
            <a aria-label="Website" href="#" className={classes}>
              <Globe className="size-4" />
            </a>
            <a
              aria-label="Email"
              href="mailto:hi@example.com"
              className={classes}
            >
              <Mail className="size-4" />
            </a>
          </div>
        </nav>
      </header>

      <section className="container flex flex-col items-start text-left text-md max-w-md">
        <Image
          src={getImagePath("/logo.svg")}
          alt="Jabir Logo"
          width={34}
          height={34}
          className="self-start"
        />

        <div className="flex flex-col text-[#9b9c9c] items-start text-left text-base font-medium gap-y-3 max-w-3xl md:max-w-4xl my-3">
          <h1 className="text-4xl font-bold text-foreground">
            Jabir Jaleel
          </h1>
          <h2 className="text-lg font-normal text-muted-foreground">
            I&apos;m a designer and developer building digital products.
            <p className="mt-2">
              I&apos;ve built multiple products, freelanced, worked at
              startups, and now I&apos;m building
              <span className="text-primary-foreground"> AssureQA</span>— an
              AI-powered automation platform for smarter software testing
              ✌.
            </p>
          </h2>

          <a
            href="mailto:hi@example.com"
            className="text-lg text-primary hover:text-link-hover transition-colors"
          >
            Hire me <span className="inline-block">↗</span>
          </a>
        </div>
      </section>

      <div className="my-8">
        <Navigation />
        <Separator />
      </div>

      <ProductsGrid />

      <footer className="w-full mt-16 text-muted-foreground">
        <hr className="border-border" />
        <div className="flex items-center justify-between py-8">
          <div className="text-sm font-normal">Jabir © 2025</div>
          <Image
            src={getImagePath("/jab.png")}
            alt="Jabir Logo"
            width={18}
            height={18}
            className="self-start"
          />
        </div>
      </footer>
    </main>
  );
}