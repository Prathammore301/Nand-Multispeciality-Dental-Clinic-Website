import Image from "next/image";

import { cx, isLocalImagePath } from "@/lib/utils";
import type { ClinicImage as ClinicImageData } from "@/types/clinic";

export function ClinicImage({
  image,
  priority = false,
  className,
  sizes,
  fill = false,
}: {
  image: ClinicImageData;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
}) {
  if (!isLocalImagePath(image.src) || image.placeholder) {
    return null;
  }

  if (image.src.endsWith(".svg")) {
    return (
      // SVG files are served directly from /public so they never enter the image optimizer.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes ?? "(min-width: 1024px) 40rem, 100vw"}
        className={cx("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
      priority={priority}
      sizes={sizes ?? "(min-width: 1024px) 40rem, 100vw"}
    />
  );
}

export function FramedPhotograph({
  image,
  priority = false,
  sizes,
  ratio,
  caption,
}: {
  image: ClinicImageData;
  priority?: boolean;
  sizes: string;
  ratio: string;
  caption?: string;
}) {
  return (
    <figure>
      <div className={cx("relative overflow-hidden rounded-panel border border-line bg-accent-soft", ratio)}>
        <ClinicImage image={image} fill priority={priority} sizes={sizes} />
      </div>
      {caption ? (
        <figcaption className="mt-2.5 max-w-prose text-xs leading-5 tracking-wide text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
