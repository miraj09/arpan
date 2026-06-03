"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type StoryKey = "story1" | "story2";

const STORIES: {
  key: StoryKey;
  src: string;
  width: number;
  height: number;
  layout: "featured" | "split";
}[] = [
  {
    key: "story1",
    src: "/our-mission-1.jpg",
    width: 1200,
    height: 800,
    layout: "featured",
  },
  {
    key: "story2",
    src: "/our-mission-2.jpg",
    width: 600,
    height: 750,
    layout: "split",
  },
];

function StoryImageFrame({
  src,
  alt,
  width,
  height,
  sizes,
  imageClassName,
  frameClassName,
  onOpen,
  viewLabel,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  imageClassName: string;
  frameClassName?: string;
  onOpen: () => void;
  viewLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative flex w-full items-center justify-center overflow-hidden bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${frameClassName ?? ""}`}
      aria-label={viewLabel}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={`mx-auto transition-transform duration-500 group-hover:scale-[1.02] ${imageClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Expand className="h-3.5 w-3.5" />
        {viewLabel}
      </div>
    </button>
  );
}

export default function ImpactStoriesSection() {
  const t = useTranslations("About.impactStories");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeStory = lightboxIndex !== null ? STORIES[lightboxIndex] : null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrevious = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + STORIES.length) % STORIES.length,
    );
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % STORIES.length);
  };

  return (
    <section
      id="impact-stories"
      className="py-16 md:py-24 bg-muted/30 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12 md:mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            {t("label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("intro")}
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {STORIES.map((story, index) => {
            const storyKey = story.key;
            const badge = t(`${storyKey}.badge`);

            if (story.layout === "featured") {
              return (
                <article
                  key={storyKey}
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-shadow hover:shadow-xl"
                >
                  <StoryImageFrame
                    src={story.src}
                    alt={t(`${storyKey}.imageAlt`)}
                    width={story.width}
                    height={story.height}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    frameClassName="max-h-[min(50vh,26rem)] sm:max-h-[min(52vh,30rem)]"
                    imageClassName="max-h-[min(50vh,26rem)] sm:max-h-[min(52vh,30rem)] max-w-full w-auto object-contain object-center"
                    onOpen={() => openLightbox(index)}
                    viewLabel={t("viewFullImage")}
                  />
                  <div className="space-y-3 p-6 md:p-8">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {t(`${storyKey}.title`)}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {t(`${storyKey}.caption`)}
                    </p>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">
                      {t(`${storyKey}.description`)}
                    </p>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={storyKey}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <StoryImageFrame
                    src={story.src}
                    alt={t(`${storyKey}.imageAlt`)}
                    width={story.width}
                    height={story.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    imageClassName="h-full min-h-[280px] object-cover"
                    onOpen={() => openLightbox(index)}
                    viewLabel={t("viewFullImage")}
                  />
                  <div className="flex flex-col justify-center space-y-3 p-6 md:p-8 lg:p-10">
                    <span className="inline-flex w-fit items-center rounded-full bg-accent/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                      {badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {t(`${storyKey}.title`)}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {t(`${storyKey}.caption`)}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`${storyKey}.description`)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {STORIES.map((story, index) => (
            <button
              key={story.key}
              type="button"
              onClick={() => openLightbox(index)}
              className={`relative h-20 w-28 overflow-hidden rounded-xl border-2 transition-all sm:h-24 sm:w-32 ${
                lightboxIndex === index
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border hover:border-primary/50"
              }`}
              aria-label={t(`${story.key}.title`)}
            >
              <Image
                src={story.src}
                alt=""
                fill
                sizes="128px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="pt-10 text-center">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            {t("cta")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent
          className="max-w-5xl gap-0 overflow-hidden border-border p-0 sm:max-w-5xl"
          showCloseButton
        >
          {activeStory && lightboxIndex !== null && (
            <>
              <DialogTitle className="sr-only">
                {t(`${activeStory.key}.title`)}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {t(`${activeStory.key}.imageAlt`)}
              </DialogDescription>

              <div className="relative bg-black">
                <Image
                  src={activeStory.src}
                  alt={t(`${activeStory.key}.imageAlt`)}
                  width={activeStory.width}
                  height={activeStory.height}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="max-h-[75vh] w-full object-contain"
                />

                {STORIES.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                      aria-label={t("previousImage")}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                      aria-label={t("nextImage")}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="space-y-2 border-t border-border p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {t(`${activeStory.key}.badge`)}
                </p>
                <h3 className="text-lg font-bold text-foreground">
                  {t(`${activeStory.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`${activeStory.key}.caption`)}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
