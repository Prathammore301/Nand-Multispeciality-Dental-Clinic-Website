import { clinic } from "@/config/clinic";
import { FramedPhotograph } from "@/components/ui/clinic-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { isLocalImagePath } from "@/lib/utils";

export function GallerySection() {
  const images = clinic.gallery.filter(
    (image) => isLocalImagePath(image.src) && image.placeholder !== true,
  );
  const [lead, ...rest] = images;

  return (
    <section id="gallery" aria-labelledby="gallery-heading" tabIndex={-1} className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="Photographs" title="Photo gallery" titleId="gallery-heading">
          {images.length > 0
            ? "These photographs show dental care in general. They are not photographs of this clinic."
            : undefined}
        </SectionHeading>
        {lead ? (
          <div className="mt-10">
            <FramedPhotograph
              image={lead}
              ratio="aspect-[2/1]"
              sizes="(min-width: 1024px) 72rem, 100vw"
              caption={lead.caption}
            />
          </div>
        ) : null}
        {rest.length > 0 ? (
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {rest.map((image) => (
              <li key={image.src} className="min-w-0">
                <FramedPhotograph
                  image={image}
                  ratio="aspect-[3/2]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                  caption={image.caption}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
