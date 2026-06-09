"use client";

import { useTranslations } from "next-intl";
import { Play, X, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  description?: string;
}

// Helper function to convert YouTube URLs to embed format
function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";
  
  // Handle youtu.be short links
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  
  // Handle youtube.com watch links
  const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  
  // Already in embed format
  if (url.includes("youtube.com/embed/")) {
    return url;
  }
  
  return url;
}

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
}

const ALL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "/gallery/g1.jpeg",
    alt: "Ayesha",
    description: "Ayesha’s Story Alhamdulillah, Ayesha has been discharged today. ❤️ She recovered very quickly. Her entire family is humble and well-mannered. May Allah remove their hardships and bless their household with ease and prosperity.",
  },
  {
    id: "2",
    type: "image",
    src: "/gallery/g2.jpeg",
    alt: "Borna",
    description: "Considering the critical condition, we took full responsibility for the patient’s treatment. Six-year-old Borna’s clothes caught fire while she was playing. She was first taken to a local hospital, where doctors advised that she be transferred to Dhaka for advanced medical care. Despite their limited financial capacity, her father, Md. Suman, borrowed money and brought her to Dhaka for treatment. After thorough examinations at the hospital in Dhaka, doctors confirmed that nearly 30% of Borna’s body, including sensitive areas, had been severely burned. Her condition was very serious. Borna’s father is a farmer, and the family survives on a modest income. They were not financially stable, and managing the high cost of treatment was extremely difficult for them. During this challenging time, we stood beside the family and provided full medical support. Alhamdulillah, after several successful surgeries, Borna has now fully recovered.",
  },
  {
    id: "3",
    type: "image",
    src: "/gallery/g3.jpeg",
    alt: "Mohona",
    description: "Mohona, a 9-year-old madrasa student from Pirganj village in Thakurgaon, faced a tragic accident during the winter season. To protect themselves from the severe cold, some local people were burning paper to keep warm. Unfortunately, the fire accidentally caught Mohona’s georgette dress. Before the flames could be fully extinguished, a large part of her body was severely burned. As a result of the accident, nearly 30% of Mohona’s body, including her face, was burned. She was quickly admitted to the Burn Unit of Dhaka Medical College Hospital in the capital, where doctors made every possible effort to save her life and support her recovery. Mohona’s father, Mr. Md. Mobarak, is a daily wage laborer, and her mother, Kulsum, is a homemaker. The family already struggled to meet their daily needs, and the high cost of burn treatment was far beyond their financial capacity. In desperation to save their daughter’s life, her father reached out to us for help. From that moment, we stood beside them as part of their family. UHDP became Mohona’s strongest companion throughout her recovery journey. Today, Mohona has recovered significantly and has returned to a normal life. However, the scars on her body and the emotional trauma will remain with her for a long time. For a young girl, such an experience is undoubtedly painful and life-changing.",
  },
  {
    id: "4",
    type: "image",
    src: "/gallery/g4.png",
    alt: "Finished product showcase",
    description: "A showcase of completed hand-stitched products ready to ship. Each item is carefully quality-checked before being packaged for delivery to our conscious customers worldwide.",
  },
  {
    id: "5",
    type: "image",
    src: "/gallery/g5.jpeg",
    alt: "Community impact",
    description: "Our partnership with UHDP ensures that a portion of every sale directly funds healthcare for those in need. This is real impact you create with every purchase.",
  },
  {
    id: "6",
    type: "video",
    src: "https://youtu.be/9OO7uYl_6sI",
    thumbnail: "/arpan-hand-stitch/gallery-3.jpg",
    alt: "Behind the scenes video",
    description: "Take a look behind the scenes at our workshop where master artisans bring each design to life with traditional hand-stitching techniques.",
  },
  {
    id: "7",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/arpan-hand-stitch/gallery-3.jpg",
    alt: "Artisan story",
    description: "Hear directly from our artisans about their craft, their journey, and how your support enables them to earn with dignity and independence.",
  },
  // Add more items here...
];

const ITEMS_PER_PAGE = 6;

export default function GallerySection() {
  const t = useTranslations("Gallery");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [page, setPage] = useState(0);

  const displayedItems = useMemo(
    () =>
      ALL_GALLERY_ITEMS.slice(0, (page + 1) * ITEMS_PER_PAGE),
    [page]
  );

  const hasMore = displayedItems.length < ALL_GALLERY_ITEMS.length;

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
            {t("label")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {item.type === "image" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-0.5" />
                    </div>
                  </div>
                  {item.thumbnail ? (
                    <Image
                      src={item.thumbnail}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10" />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setPage(page + 1)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all"
            >
              Load More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Items Count */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Showing {displayedItems.length} of {ALL_GALLERY_ITEMS.length} items
        </div>
      </div>

      {/* Lightbox Modal - remains same */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-background flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedItem.type === "image" ? (
              <div className="relative w-full h-[60vh] flex-shrink-0">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-full aspect-video bg-black flex-shrink-0">
                <iframe
                  src={getYouTubeEmbedUrl(selectedItem.src)}
                  title={selectedItem.alt}
                  className="w-full h-full border-0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
            )}

            <div className="bg-card border-t border-border p-6 space-y-2 overflow-auto flex-1">
              <h3 className="text-lg font-bold text-foreground">{selectedItem.alt}</h3>
              {selectedItem.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
