import Image from "next/image";
import { Button } from "@/components/ui/Button";

// "Threshold walk-in" media (docs/PROJECT.md §5). The poster is the final frame of the video.
const featured = {
  name: "Casa Lumen",
  location: "Malibu, California",
  poster: "/media/hero/hero-poster.webp",
  videoPoster: "/media/hero/hero-start.webp",
  video: "/media/hero/hero.mp4",
  videoMobile: "/media/hero/hero-m.mp4",
};

export function Hero() {
  return (
    <section className="relative h-svh min-h-140 w-full overflow-hidden bg-olive text-travertine">
      <Image
        src={featured.poster}
        alt={`${featured.name}, ${featured.location}: a travertine room opening through a glass wall to the ocean at sunset`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Plays once and holds on the last frame (= the poster above). The Motion phase adds the loader and wordmark reveal */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={featured.videoPoster}
        className="absolute inset-0 size-full object-cover object-center"
      >
        <source src={featured.videoMobile} type="video/mp4" media="(max-width: 600px)" />
        <source src={featured.video} type="video/mp4" />
      </video>

      {/* Legibility: shade the bottom-left corner where the copy sits, leave the view clear */}
      <div className="absolute inset-0 bg-linear-to-t from-olive/80 via-olive/35 to-transparent md:bg-linear-to-tr md:from-olive/70 md:via-olive/20" />

      {/* What Domus is, why it's different, what to do next */}
      <div className="absolute inset-x-0 bottom-0 grid gap-10 px-4 pb-8 sm:px-8 sm:pb-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8 lg:col-span-7">
          <p className="text-kicker uppercase tracking-kicker">A private collection of homes</p>
          {/* Always two lines */}
          <h1 className="mt-4 text-h1">
            Rare homes,
            <br />
            quietly curated.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-travertine/85">
            Domus selects a small number of homes by notable architects and shows each one privately,
            by appointment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/residences" variant="primary">
              Explore the collection
            </Button>
            <Button href="/contact" variant="outlineLight" showIcon={false}>
              Book a viewing
            </Button>
          </div>
        </div>

        {/* Names the home in the video, so the image reads as a real residence */}
        <p className="hidden border-l border-travertine/30 pl-4 text-kicker uppercase tracking-kicker text-travertine/85 md:col-span-3 md:col-start-10 md:block md:justify-self-end">
          <span className="block text-travertine/60">In the film</span>
          <span className="mt-1 block">{featured.name}</span>
          <span className="mt-1 block">{featured.location}</span>
        </p>
      </div>
    </section>
  );
}
