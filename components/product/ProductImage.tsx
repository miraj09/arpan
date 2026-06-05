import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  /** Tailwind classes for the outer container (must include relative + dimensions) */
  className?: string;
  /** Tailwind classes applied to the img element */
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Consistent product photo wrapper around next/image.
 * Parent must set size via className (e.g. h-56 w-full or aspect-square).
 */
export default function ProductImage({
  src,
  alt,
  className,
  imageClassName = "object-cover",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(imageClassName)}
      />
    </div>
  );
}
