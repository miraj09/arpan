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
      "Lovingly handwoven by artisan cooperatives in Rajasthan using traditional cotton-weaving techniques passed down through generations, this meditation cushion offers the perfect balance of firm support and gentle comfort. The dense fill keeps its shape through years of daily practice, while the removable, machine-washable cover keeps everything fresh. A small brass tag on every cushion carries the weaver's initials — a personal mark of pride in the craft.",
    features: [
      "Hand-woven by certified fair-trade artisans in Rajasthan",
      "Dense buckwheat-hull fill with removable cotton cover",
      "Ergonomic height promotes natural spinal alignment",
      "Available in four heritage colour palettes",
      "Machine-washable outer cover — inner fill spot-clean only",
    ],
    specs: [
      { label: "Dimensions", value: "14 in diameter × 6 in height" },
      { label: "Fill", value: "100% organic buckwheat hulls" },
      { label: "Cover", value: "100% hand-dyed cotton" },
      { label: "Weight", value: "2.8 kg" },
      { label: "Care", value: "Cover machine-wash cold, tumble dry low" },
      { label: "Origin", value: "Jaipur, Rajasthan, India" },
    ],
    reviews: [
      { name: "Meera S.", location: "Bengaluru, IN", rating: 5, date: "March 2026", text: "I've been meditating for seven years and this is genuinely the most comfortable cushion I've owned. The height is perfect and the fill doesn't compress after months of use.", verified: true },
      { name: "Tom L.", location: "Amsterdam, NL", rating: 5, date: "February 2026", text: "Beautiful craftsmanship and knowing it supports healthcare for underserved communities makes it even better. My instructor asked where I got it!", verified: true },
      { name: "Priya A.", location: "London, UK", rating: 4, date: "January 2026", text: "Lovely product. Took a week to arrive internationally but worth the wait. The cover washed perfectly.", verified: false },
    ],
  },
  2: {
    description:
      "A curated collection of twelve single-origin herbal infusions sourced directly from small organic farms across the Western Ghats, the Nilgiris, and Assam. Every blend is hand-selected for flavour profile, medicinal value, and environmental footprint. Cold-pressed and nitrogen-sealed to preserve volatile aromatic compounds that most commercial teas lose in bulk processing. No artificial colours, no added flavours — just pure leaf, flower, and root.",
    features: [
      "12 distinct single-origin blends in a keepsake gift box",
      "Nitrogen-sealed pouches lock in aroma and antioxidants",
      "Sourced exclusively from Rainforest Alliance-certified farms",
      "Fully compostable packaging — box, pouches, and ink",
      "Brewing guide and flavour map included",
    ],
    specs: [
      { label: "Contents", value: "12 blends × 10 g each (120 g total)" },
      { label: "Servings", value: "~60 cups per box" },
      { label: "Caffeine", value: "6 blends caffeine-free, 6 lightly caffeinated" },
      { label: "Shelf life", value: "18 months unopened" },
      { label: "Packaging", value: "100% compostable" },
      { label: "Certification", value: "Organic, Rainforest Alliance" },
    ],
    reviews: [
      { name: "Ananya R.", location: "Mumbai, IN", rating: 5, date: "April 2026", text: "Gifted this to my mother and she absolutely loves it. The variety is incredible — I've been stealing a few cups myself! The ginger-turmeric blend is extraordinary.", verified: true },
      { name: "Sofía M.", location: "Madrid, ES", rating: 5, date: "March 2026", text: "Every single blend is exceptional. I've tried hundreds of herbal teas and this collection stands out for its purity and depth of flavour.", verified: true },
      { name: "James K.", location: "Toronto, CA", rating: 4, date: "February 2026", text: "Shipping was quick and packaging stunning. The hibiscus-rose blend is my daily ritual now.", verified: true },
    ],
  },
  3: {
    description:
      "Cut and stitched by a women-run cooperative in Pondicherry, this oversized tote is made from pre-washed stonewashed linen — a fabric that gets better with every wash. The reinforced flat-bottom gusset means it holds its shape whether you're carrying a week of groceries or a day at the market. An interior zip pocket keeps your valuables secure. The natural undyed variant uses zero chemical finishes; coloured options use low-impact GOTS-certified dyes.",
    features: [
      "Stonewashed 100% GOTS-certified organic linen",
      "Reinforced gusset bottom — holds up to 12 kg",
      "Interior zip pocket with branded brass hardware",
      "Double-stitched seams with visible contrast thread",
      "Gets softer and more beautiful with every wash",
    ],
    specs: [
      { label: "Dimensions", value: "40 × 35 × 18 cm (L × H × D)" },
      { label: "Handles", value: "60 cm drop — fits over shoulder" },
      { label: "Material", value: "280 gsm stonewashed linen" },
      { label: "Load rating", value: "Up to 12 kg" },
      { label: "Care", value: "Machine-wash 30 °C, hang dry" },
      { label: "Made in", value: "Pondicherry, Tamil Nadu, India" },
    ],
    reviews: [
      { name: "Clara V.", location: "Paris, FR", rating: 5, date: "March 2026", text: "This is my third Arpan tote — I buy one every season in a different colour. The quality is simply unmatched in this price range.", verified: true },
      { name: "Fatima N.", location: "Dubai, UAE", rating: 4, date: "February 2026", text: "Sturdy, beautiful and ethical. The linen texture is wonderful. Deducting one star only because I wish it came in more colours.", verified: true },
      { name: "Alice B.", location: "Melbourne, AU", rating: 5, date: "January 2026", text: "Replaced three synthetic bags with this one. Love that it folds flat and bounces back perfectly.", verified: false },
    ],
  },
  4: {
    description:
      "A six-piece set of mineral-rich facial masks blended from volcanic ash, white kaolin, red clay, and charcoal sourced from artisan producers across India and Morocco. Each mask is cold-milled to preserve active minerals that heat-processing destroys. Fragrance-free and dermatologist-tested for all skin types, including sensitive skin. Presented in hand-thrown ceramic pots that are refillable and collectable.",
    features: [
      "Six mineral masks in individually hand-thrown ceramic pots",
      "Cold-milled to preserve active mineral content",
      "Fragrance-free, dermatologist-tested, suitable for sensitive skin",
      "No parabens, sulphates, silicones, or synthetic preservatives",
      "Pots are refillable — request a refill pouch on your next order",
    ],
    specs: [
      { label: "Contents", value: "6 masks × 30 g each (180 g total)" },
      { label: "Skin types", value: "All, including sensitive" },
      { label: "Frequency", value: "1–2 times per week" },
      { label: "Shelf life", value: "24 months unopened, 6 months after opening" },
      { label: "Certifications", value: "Cruelty-free, vegan, dermatologist-tested" },
      { label: "Pots", value: "Hand-thrown terracotta, refillable" },
    ],
    reviews: [
      { name: "Nadia K.", location: "Cairo, EG", rating: 5, date: "April 2026", text: "My skin has never looked better. The volcanic ash mask is a revelation — pores visibly smaller after three uses.", verified: true },
      { name: "Hannah P.", location: "New York, US", rating: 5, date: "March 2026", text: "Finally a clay mask set that doesn't strip my sensitive skin. The ceramic pots are gorgeous on my shelf.", verified: true },
      { name: "Ji-yeon L.", location: "Seoul, KR", rating: 4, date: "February 2026", text: "Very effective and love that it's cruelty-free. The charcoal mask is my favourite for T-zone control.", verified: true },
    ],
  },
  5: {
    description:
      "A comprehensive kitchen essential kit spanning thirteen pieces — from a cutting board and serving spoons to oil dispensers and a utensil holder — all crafted from FSC-certified Moso bamboo grown in Karnataka. Bamboo matures in four years versus decades for hardwood, making it one of the most regenerative materials available. Finished with food-safe mineral oil, each piece is designed to last a lifetime with simple care.",
    features: [
      "13-piece set crafted from FSC-certified Moso bamboo",
      "Finished with food-grade mineral oil — no toxic varnish",
      "Bamboo is naturally antimicrobial — no chemical treatment needed",
      "Moso grows to harvest in 4 years, vs 40+ for hardwood",
      "Each piece laser-engraved with batch and artisan ID",
    ],
    specs: [
      { label: "Pieces", value: "13 (full list in box insert)" },
      { label: "Material", value: "FSC Moso bamboo" },
      { label: "Finish", value: "Cold-pressed food-grade mineral oil" },
      { label: "Care", value: "Hand-wash only; oil monthly" },
      { label: "Cutting board", value: "35 × 25 × 1.8 cm" },
      { label: "Certification", value: "FSC, food-safe EU/FDA compliant" },
    ],
    reviews: [
      { name: "Marco B.", location: "Rome, IT", rating: 5, date: "March 2026", text: "Replaced all my plastic kitchen tools in one order. The build quality is outstanding and the bamboo has a beautiful grain. Very happy.", verified: true },
      { name: "Leila H.", location: "Tehran, IR", rating: 5, date: "March 2026", text: "A perfect housewarming gift. My sister couldn't believe the quality. We've ordered three sets now.", verified: true },
      { name: "David C.", location: "São Paulo, BR", rating: 4, date: "February 2026", text: "Beautiful and sustainable. Only wish it included a knife. Otherwise exceptional value.", verified: false },
    ],
  },
  6: {
    description:
      "Cold-pressed from hand-harvested Moroccan argan kernels by a Berber women's cooperative in the Souss-Massa region, this oil is extracted without heat or chemical solvents to preserve every trace of vitamin E, oleic acid, and rare sterolins that give argan its legendary skin-rejuvenating properties. Triple-filtered for purity, it absorbs instantly without greasiness. Suitable for face, body, hair, and nails.",
    features: [
      "100% pure cold-pressed argan oil — no carrier oils or additives",
      "Triple-filtered for clarity and purity",
      "Extracted by a Berber women's cooperative in Souss-Massa",
      "Rich in vitamin E, oleic acid, and rare plant sterolins",
      "Absorbs in seconds — no residue on skin or hair",
    ],
    specs: [
      { label: "Volume", value: "60 ml" },
      { label: "Origin", value: "Souss-Massa, Morocco" },
      { label: "Extraction", value: "Cold-pressed, no solvents" },
      { label: "Filtration", value: "Triple-filtered" },
      { label: "Shelf life", value: "24 months from pressing date" },
      { label: "Certifications", value: "COSMOS Organic, Fair Trade" },
    ],
    reviews: [
      { name: "Yasmin A.", location: "Casablanca, MA", rating: 5, date: "April 2026", text: "As someone from Morocco, I know argan well. This is as close to what my grandmother used as anything I've found outside the country. Exceptional.", verified: true },
      { name: "Elena R.", location: "Milan, IT", rating: 5, date: "March 2026", text: "I use it as a serum under moisturiser and my skin texture has transformed in eight weeks. Worth every penny.", verified: true },
      { name: "Sarah M.", location: "Chicago, US", rating: 5, date: "February 2026", text: "Best argan oil I've tried. A little goes a very long way — one bottle lasts me two months.", verified: true },
    ],
  },
  7: {
    description:
      "Each journal is bound from a single piece of upcycled leather salvaged from Kanpur tannery offcuts that would otherwise go to landfill. The interior holds 240 sheets of 90 gsm acid-free paper — thick enough to prevent bleed-through with fountain pens, brush pens, or watercolour. A hand-stitched spine, brass corner guards, and a magnetic clasp make this a journal you'll be reluctant to finish.",
    features: [
      "Cover from single-piece upcycled Kanpur tannery leather",
      "240 sheets of 90 gsm acid-free, fountain-pen-friendly paper",
      "Hand-stitched Coptic binding lies flat when open",
      "Brass corner guards and magnetic clasp",
      "Elastic pen loop and two ribbon bookmarks",
    ],
    specs: [
      { label: "Dimensions", value: "A5 (148 × 210 mm)" },
      { label: "Pages", value: "480 pp (240 sheets)" },
      { label: "Paper weight", value: "90 gsm acid-free" },
      { label: "Binding", value: "Coptic hand-stitched" },
      { label: "Cover", value: "Upcycled full-grain leather" },
      { label: "Made in", value: "Kanpur, Uttar Pradesh, India" },
    ],
    reviews: [
      { name: "Oliver N.", location: "Berlin, DE", rating: 5, date: "March 2026", text: "As a daily journaller for twelve years, this is the best paper I've written on. The Coptic binding is flawless and the leather has a gorgeous patina developing already.", verified: true },
      { name: "Zara F.", location: "London, UK", rating: 4, date: "February 2026", text: "Beautiful quality. Paper is wonderful with my Lamy fountain pen — zero bleed-through. Very pleased.", verified: true },
      { name: "Kenji W.", location: "Tokyo, JP", rating: 5, date: "January 2026", text: "Bought five as gifts and one for myself. Everyone loved them. The upcycled leather story makes it even more special.", verified: false },
    ],
  },
  8: {
    description:
      "A thoughtfully assembled ritual kit containing nine full-size wellness essentials curated by our in-house practitioner team: the meditation cushion, the argan oil, the herbal tea collection, a beeswax candle, a rose quartz gua sha tool, a linen eye pillow, a handmade incense bundle, a digital wellness guide, and a personalised impact card showing exactly which healthcare program your purchase supports.",
    features: [
      "Nine full-size products — no travel-size compromises",
      "Personalised impact card with QR link to your funded program",
      "Arrives in a hand-finished reusable gift box with cotton ribbon",
      "Curated by certified wellness practitioners",
      "Free handwritten gift message — add your note at checkout",
    ],
    specs: [
      { label: "Contents", value: "9 full-size items (see full list in description)" },
      { label: "Box dimensions", value: "34 × 28 × 14 cm" },
      { label: "Box material", value: "Recycled board, water-based inks" },
      { label: "Gift wrap", value: "Included, cotton ribbon" },
      { label: "Dispatch", value: "2–3 business days (gift items prioritised)" },
      { label: "Customisation", value: "Gift message and product swap available" },
    ],
    reviews: [
      { name: "Riya D.", location: "Delhi, IN", rating: 5, date: "April 2026", text: "Gifted this to my best friend for her birthday and she cried happy tears. The quality of every single item is outstanding and the personalised impact card was a beautiful touch.", verified: true },
      { name: "Charlotte B.", location: "Paris, FR", rating: 5, date: "March 2026", text: "I've bought luxury wellness gift sets at three times the price and none have matched this for quality, thoughtfulness, or purpose.", verified: true },
      { name: "Aditi P.", location: "Pune, IN", rating: 5, date: "February 2026", text: "Sent to my mother who's recovering from surgery. She called to say it was the most thoughtful gift she'd ever received.", verified: true },
    ],
  },
};
