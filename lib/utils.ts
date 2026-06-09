import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price with BDT currency for the given locale
 * @param price - Price in BDT (integer)
 * @param locale - Language locale ('en' or 'bn')
 * @returns Formatted price string with BDT currency
 */
export function formatPrice(price: number, locale: string = 'en'): string {
  const formatter = new Intl.NumberFormat(locale === 'bn' ? 'bn-BD' : 'en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  
  return `BDT ${formatter.format(price)}`
}
