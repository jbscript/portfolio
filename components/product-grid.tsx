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
    name: "Screenity",
    description:
      "The free and privacy-friendly screen recorder with no limits. It has over 180K users, and was featured on Fast Company as one of the best apps of 2020.",
    link: "https://screenity.io/",
    linkText: "screenity.io",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/images/screenity-2.png",
  },
  {
    name: "Omni",
    description:
      "The all-in-one tool to supercharge your productivity. It was featured on Fast Company, and won the Best Productivity Booster award at JsNation Amsterdam 2022.",
    link: "https://github.com/alyssaxuu/omni",
    linkText: "github.com/alyssaxuu/omni",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/images/omni-5.png",
  },
  {
    name: "Mapus",
    description:
      "An open source map tool with real-time collaboration, for annotating and exploring with friends on a map. It was a Product Hunt Golden Kitty Awards finalist.",
    link: "https://github.com/alyssaxuu/mapus",
    linkText: "github.com/alyssaxuu/mapus",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/images/mapus-7.png",
  },
  {
    name: "Motionity",
    description:
      "A web-based motion graphics editor. It's a mix of After Effects and Canva, with powerful features but a simple interface.",
    link: "https://motionity.app/",
    linkText: "motionity.app",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/images/motionity-10.png",
  },
  {
    name: "Automation tool",
    description:
      "An unreleased extension to automate the browser using simple block programming. I'm still considering releasing it at some point.",
    link: "https://twitter.com/alyssaxuu/status/1454152829350854662",
    linkText: "twitter.com",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/images/wip-14.png",
  },
  {
    name: "Play a game",
    description: "Can you survive long enough to beat the high score?",
    link: "https://alyssax.com/",
    linkText: "alyssax.com",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9fd2bb1f-ca7e-41ff-8cf3-8f6f98cb5045-alyssax-com/assets/images/game-1.png",
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
