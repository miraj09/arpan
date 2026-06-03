"use client";

import { useEffect } from "react";

/** Sets document language for the active locale (html lives in root layout). */
export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
