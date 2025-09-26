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
    name: "Launch-saas",
    description:
      "A powerful saas boilerplate to kickstart your next project effortlessly.",
    link: "https://github.com/jbscript/LaunchSaaS",
    linkText: "github.com/jbscript/LaunchSaaS",
    imageUrl: "/launchsaas.png",
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
        <h3 className="font-semibold text-primary-foreground">
          {product.name}
        </h3>
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
