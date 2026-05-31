"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AnnouncementBar() {
  const t = useTranslations("AnnouncementBar");
  return (
    <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 text-xs sm:text-sm font-medium">
      {t("text")}&nbsp;
      <Link
        href="/#mission"
        className="underline underline-offset-2 font-bold hover:no-underline"
      >
        {t("link")}
      </Link>
    </div>
  );
}
