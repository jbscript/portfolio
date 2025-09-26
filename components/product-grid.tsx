import Image from "next/image";

type Product = {
  name: string;
  description: string;
  link: string;
  linkText: string;
  imageUrl: string;
};

const productsData: Product[] = [
  {
    name: "PixelForge",
    description:
      "An AI-powered tool to generate stunning pixel art in seconds. Featured in multiple indie dev showcases worldwide.",
    link: "https://pixelforge.dev/",
    linkText: "pixelforge.dev",
    imageUrl: "https://picsum.photos/seed/pixelforge/400/250",
  },
  {
    name: "TaskWhiz",
    description:
      "A lightweight productivity app that helps you organize tasks with smart reminders and gamified streaks.",
    link: "https://github.com/example/taskwhiz",
    linkText: "github.com/example/taskwhiz",
    imageUrl: "https://picsum.photos/seed/taskwhiz/400/250",
  },
  {
    name: "CollabBoard",
    description:
      "A real-time collaborative whiteboard for brainstorming with sticky notes, mind maps, and drawing tools.",
    link: "https://collabboard.app/",
    linkText: "collabboard.app",
    imageUrl: "https://picsum.photos/seed/collabboard/400/250",
  },
  {
    name: "Clipster",
    description:
      "The easiest way to trim, edit, and share video clips online — think of it as a pocket-sized Premiere Pro.",
    link: "https://clipster.io/",
    linkText: "clipster.io",
    imageUrl: "https://picsum.photos/seed/clipster/400/250",
  },
  {
    name: "AutoPilotX",
    description:
      "An experimental Chrome extension that automates repetitive browsing tasks using drag-and-drop blocks.",
    link: "https://github.com/example/autopilotx",
    linkText: "github.com/example/autopilotx",
    imageUrl: "https://picsum.photos/seed/autopilotx/400/250",
  },
  {
    name: "AstroRun",
    description:
      "A fast-paced space adventure game where you dodge asteroids and chase the leaderboard.",
    link: "https://astrorun.fun/",
    linkText: "astrorun.fun",
    imageUrl: "https://picsum.photos/seed/astrorun/400/250",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const isGameCard = product.name === "Play a game";

  return (
    <div className="group flex flex-col overflow-hidden transition-all duration-200 ease-in-out hover:-translate-y-1">
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={`aspect-[16/10] ${
            isGameCard ? "bg-black" : ""
          } overflow-hidden`}
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={370}
            height={231}
            className={`w-full rounded-xs h-full transition-transform duration-300 group-hover:scale-105 ${
              isGameCard ? "object-contain p-12" : "object-cover"
            }`}
          />

          {/* <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4"
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top rounded"
          ></video> */}
        </div>
      </a>
      <div className="flex flex-col flex-grow mt-6 text-sm">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-muted-foreground font-medium mt-2 leading-relaxed">
          {product.description}
        </p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-secondary-foreground mt-auto pt-4 self-start hover:text-link-hover"
        >
          {product.linkText}
          <span className="inline-block transition-transform duration-200 ease-in-out group-hover:translate-x-1 ml-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productsData.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
