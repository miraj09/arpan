export interface ProductDetail {
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  reviews: {
    name: string;
    location: string;
    rating: number;
    date: string;
    text: string;
    verified: boolean;
  }[];
}

export const PRODUCT_DETAILS: Record<number, ProductDetail> = {
  1: {
    description:
      "A crisp white camp-collar shirt hand-stitched by UHDP artisans in Narayanganj, Bangladesh. Large rose motifs in tan and forest-green thread are embroidered on both front panels using traditional kantha-style running stitch — each flower is individually worked by hand, making every shirt subtly unique. Lightweight cotton-linen blend fabric keeps you cool; the relaxed fit works equally well for everyday wear or special occasions.",
    features: [
      "Hand-stitched rose embroidery by UHDP-trained artisans",
      "Camp collar with pearlescent button placket",
      "Lightweight cotton-linen blend — breathable in warm weather",
      "Relaxed fit with short sleeves",
      "Each garment carries the artisan's individual stitch signature",
    ],
    specs: [
      { label: "Fabric", value: "Cotton-linen blend" },
      { label: "Fit", value: "Relaxed, short sleeve" },
      { label: "Collar", value: "Camp collar" },
      { label: "Embroidery", value: "Hand-stitched kantha-style rose motifs" },
      { label: "Care", value: "Hand-wash cold or gentle machine cycle; hang dry" },
      { label: "Origin", value: "Narayanganj, Bangladesh — UHDP Foundation" },
    ],
    reviews: [
      { name: "Rahim H.", location: "Dhaka, BD", rating: 5, date: "May 2026", text: "The embroidery detail is incredible — you can see every stitch was done by hand. Fits perfectly and supports a cause I believe in.", verified: true },
      { name: "Emma W.", location: "London, UK", rating: 5, date: "April 2026", text: "Bought this for my husband and he wears it constantly. The fabric is light and the roses are so beautifully done.", verified: true },
      { name: "Anwar K.", location: "Chittagong, BD", rating: 4, date: "March 2026", text: "Lovely shirt. Took about a week for delivery but absolutely worth the wait. The hand-stitching is the real highlight.", verified: false },
    ],
  },
  2: {
    description:
      "A vibrant forest-green camp-collar shirt adorned with delicate vine-and-flower embroidery in light green and white thread. Artisans from the UHDP program use traditional running-stitch techniques to create symmetrical floral bands across the lower front panels and sleeve hems. The textured linen fabric drapes naturally and softens with every wash — a shirt that grows more comfortable over time.",
    features: [
      "Hand-stitched vine and floral embroidery on front and sleeves",
      "Rich forest-green linen with natural texture",
      "Camp collar with iridescent button closure",
      "Symmetrical kantha-style patterns on lower panels",
      "Crafted by artisans earning dignified livelihoods through UHDP",
    ],
    specs: [
      { label: "Fabric", value: "Textured linen" },
      { label: "Fit", value: "Relaxed, short sleeve" },
      { label: "Collar", value: "Camp collar" },
      { label: "Embroidery", value: "Hand-stitched vine and flower motifs" },
      { label: "Care", value: "Hand-wash cold; iron on reverse at low heat" },
      { label: "Origin", value: "Narayanganj, Bangladesh — UHDP Foundation" },
    ],
    reviews: [
      { name: "Farida S.", location: "Narayanganj, BD", rating: 5, date: "May 2026", text: "I know the artisans who make these — the quality speaks for itself. The green colour is even richer in person.", verified: true },
      { name: "James T.", location: "Sydney, AU", rating: 5, date: "April 2026", text: "Stunning shirt. The sleeve embroidery is a detail you don't see in fast fashion. Gets compliments every time I wear it.", verified: true },
      { name: "Nadia P.", location: "Toronto, CA", rating: 5, date: "March 2026", text: "Lightweight and beautifully made. Love knowing the purchase funds healthcare programs.", verified: true },
    ],
  },
  3: {
    description:
      "A charcoal-grey kurta with a mandarin collar and intricate hand-stitched embroidery featuring white florals, orange accents, and traditional mirror-work (shisha) details. Long sleeves and a partial button placket give it a refined ethnic-modern look. The textured cotton-linen fabric and dense chest-panel embroidery showcase the skill of UHDP artisans — each kurta takes several days of careful handwork to complete.",
    features: [
      "Hand-stitched floral embroidery with mirror-work accents",
      "Mandarin collar with partial button placket",
      "Long sleeves with embroidered cuff details",
      "Charcoal-grey textured cotton-linen fabric",
      "Supports UHDP healthcare and livelihood programs",
    ],
    specs: [
      { label: "Fabric", value: "Textured cotton-linen blend" },
      { label: "Fit", value: "Regular, long sleeve" },
      { label: "Collar", value: "Mandarin band collar" },
      { label: "Embroidery", value: "Hand-stitched florals with shisha mirror-work" },
      { label: "Care", value: "Dry clean recommended; gentle hand-wash if needed" },
      { label: "Origin", value: "Narayanganj, Bangladesh — UHDP Foundation" },
    ],
    reviews: [
      { name: "Hasan M.", location: "Dhaka, BD", rating: 5, date: "May 2026", text: "Wore this to a family gathering and everyone asked where I got it. The mirror-work catches the light beautifully.", verified: true },
      { name: "Sophie L.", location: "Paris, FR", rating: 5, date: "April 2026", text: "Elegant and well-made. The embroidery on the chest panel is extraordinary — clearly done by skilled hands.", verified: true },
      { name: "Kamal R.", location: "Sylhet, BD", rating: 4, date: "March 2026", text: "Beautiful kurta. Slightly heavier fabric than expected but that adds to the premium feel. Very happy with the purchase.", verified: false },
    ],
  },
  4: {
    description:
      "A charming hand-crafted cat sculpture made from tightly woven natural fibres and finished with expressive stitched details. Its warm blush, cream, and charcoal tones bring a playful artisan accent to a shelf, bedside table, or reading nook. Each piece is shaped and finished by hand, so small variations make every cat uniquely yours while supporting dignified livelihoods through UHDP.",
    features: [
      "Hand-crafted woven fibre sculpture",
      "Soft blush, cream, and charcoal colour palette",
      "Decorative piece for shelves, desks, and bedside tables",
      "Hand-finished details make every piece subtly unique",
      "Supports UHDP artisan livelihood programs",
    ],
    specs: [
      { label: "Material", value: "Woven natural fibre with textile details" },
      { label: "Finish", value: "Hand-shaped and hand-finished" },
      { label: "Use", value: "Decorative home accent" },
      { label: "Care", value: "Dust gently with a soft, dry cloth" },
      { label: "Origin", value: "Narayanganj, Bangladesh — UHDP Foundation" },
    ],
    reviews: [
      { name: "Nadia R.", location: "Dhaka, BD", rating: 5, date: "May 2026", text: "The stitching and tiny face details are so lovely. It adds personality to my bookshelf without taking up much space.", verified: true },
      { name: "Maya S.", location: "Chittagong, BD", rating: 5, date: "April 2026", text: "A beautiful handmade gift. The cat looks even more charming in person and feels sturdy for a small decorative piece.", verified: true },
    ],
  },
};
