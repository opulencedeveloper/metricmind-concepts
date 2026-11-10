import Image from "next/image";
import type { Photo } from "../data/media";

/** Auto-scrolling strip of photos at staggered heights (CSS marquee, no JS). */
export default function PhotoReel({ photos, reverse = false }: { photos: Photo[]; reverse?: boolean }) {
  const loop = [...photos, ...photos];
  return (
    <div className="overflow-hidden">
      <div className={`mm-marquee flex w-max gap-4 ${reverse ? "[animation-direction:reverse]" : ""}`}>
        {loop.map((photo, i) => (
          <div
            key={i}
            className={`relative shrink-0 overflow-hidden rounded-2xl w-[230px] md:w-[320px] ${
              i % 2 ? "h-[170px] md:h-[220px] mt-8" : "h-[210px] md:h-[270px]"
            }`}
            aria-hidden={i >= photos.length}
          >
            <Image
              src={photo.src}
              alt={i < photos.length ? photo.alt : ""}
              fill
              sizes="320px"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
