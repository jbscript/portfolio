const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}