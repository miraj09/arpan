"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

/** Clears when the browser tab/window closes so the banner shows once per session. */
const STORAGE_KEY = "arpan_welcome_banner_seen";

export default function WelcomeBannerPopup() {
  const t = useTranslations("WelcomeBanner");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
      if (!alreadySeen) {
        setOpen(true);
      }
    } catch (error) {
      console.error("Failed to read welcome banner state:", error);
    }
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch (error) {
        console.error("Failed to save welcome banner state:", error);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-[min(92vw,22rem)] gap-0 overflow-hidden border-0 p-0 shadow-2xl sm:max-w-sm"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{t("title")}</DialogTitle>

        <button
          type="button"
          onClick={() => handleOpenChange(false)}
          aria-label={t("close")}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
        >
          <X className="h-4 w-4" />
        </button>

        <Image
          src="/arpan_hero_2.jpeg"
          alt={t("alt")}
          width={480}
          height={720}
          priority
          className="h-auto w-full max-h-[85vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
