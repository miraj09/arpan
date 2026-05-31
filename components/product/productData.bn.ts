import type { ProductDetail } from "./productData";

export interface ProductDetailBn extends ProductDetail {
  /** Bangla product name shown in <h1> and breadcrumb */
  name: string;
  /** Bangla impact string shown in the callout box */
  impact: string;
}

export const PRODUCT_DETAILS_BN: Record<number, ProductDetailBn> = {
  1: {
    name: "হস্তবোনা ধ্যান কুশন",
    impact: "২টি চিকিৎসা পরামর্শে অর্থায়ন করে",
    description:
      "রাজস্থানের কারিগর সমবায়গুলি দ্বারা প্রজন্ম থেকে প্রজন্মে চলে আসা ঐতিহ্যবাহী সুতা-বোনার কৌশল ব্যবহার করে প্রেম দিয়ে হাতে বোনা, এই ধ্যান কুশন দৃঢ় সমর্থন ও মৃদু আরামের নিখুঁত ভারসাম্য দেয়। ঘন ভর্তি বছরের পর বছর দৈনিক অনুশীলনে তার আকৃতি ধরে রাখে, এবং অপসারণযোগ্য, মেশিনে ধোয়ার যোগ্য কভার সবকিছু সতেজ রাখে। প্রতিটি কুশনে একটি ছোট পিতলের ট্যাগে বুননকারীর আদ্যক্ষর খোদাই করা থাকে — কারুকাজে গর্বের একটি ব্যক্তিগত চিহ্ন।",
    features: [
      "রাজস্থানে প্রত্যয়িত ন্যায্য-বাণিজ্য কারিগরদের দ্বারা হাতে বোনা",
      "অপসারণযোগ্য তুলার কভারসহ ঘন বাকউইট-হুল ভর্তি",
      "এরগোনোমিক উচ্চতা প্রাকৃতিক মেরুদণ্ডের সঙ্গতি বজায় রাখে",
      "চারটি ঐতিহ্যবাহী রঙের প্যালেটে পাওয়া যায়",
      "মেশিনে ধোয়ার যোগ্য বাইরের কভার — ভেতরের ভর্তি স্পট-ক্লিন করুন",
    ],
    specs: [
      { label: "মাপ", value: "১৪ ইঞ্চি ব্যাস × ৬ ইঞ্চি উচ্চতা" },
      { label: "ভর্তি উপাদান", value: "১০০% জৈব বাকউইট হুল" },
      { label: "কভার", value: "১০০% হাতে রঞ্জিত তুলা" },
      { label: "ওজন", value: "২.৮ কেজি" },
      { label: "যত্ন", value: "কভার ঠান্ডা পানিতে মেশিনে ধুন, কম তাপে শুকান" },
      { label: "উৎপত্তি", value: "জয়পুর, রাজস্থান, ভারত" },
    ],
    reviews: [
      { name: "মীরা এস.", location: "বেঙ্গালুরু, ভারত", rating: 5, date: "মার্চ ২০২৬", text: "সাত বছর ধ্যান করছি এবং এটি সত্যিই আমার কেনা সবচেয়ে আরামদায়ক কুশন। উচ্চতা নিখুঁত এবং মাসের পর মাস ব্যবহারেও ভর্তি চেপে যায় না।", verified: true },
      { name: "Tom L.", location: "Amsterdam, NL", rating: 5, date: "February 2026", text: "Beautiful craftsmanship and knowing it supports healthcare for underserved communities makes it even better. My instructor asked where I got it!", verified: true },
      { name: "Priya A.", location: "London, UK", rating: 4, date: "January 2026", text: "Lovely product. Took a week to arrive internationally but worth the wait. The cover washed perfectly.", verified: false },
    ],
  },

  2: {
    name: "জৈব ভেষজ চা সংগ্রহ",
    impact: "৫ জন শিশুর জন্য আয়রন সাপ্লিমেন্ট",
    description:
      "পশ্চিমঘাট, নীলগিরি ও আসামের ছোট জৈব খামার থেকে সরাসরি সংগৃহীত বারোটি একক-উৎস ভেষজ ইনফিউশনের একটি বিশেষ সংগ্রহ। প্রতিটি মিশ্রণ স্বাদ প্রোফাইল, ঔষধি গুণ ও পরিবেশগত প্রভাবের জন্য হাতে বাছাই করা হয়। উদ্বায়ী সুগন্ধী যৌগগুলি সংরক্ষণ করতে কোল্ড-প্রেসড ও নাইট্রোজেন-সিল করা হয়। কোনো কৃত্রিম রং নেই, যোগ করা স্বাদ নেই — শুধু বিশুদ্ধ পাতা, ফুল ও শিকড়।",
    features: [
      "সংগ্রহযোগ্য উপহার বাক্সে ১২টি একক-উৎস মিশ্রণ",
      "নাইট্রোজেন-সিল পাউচ সুগন্ধ ও অ্যান্টিঅক্সিডেন্ট সংরক্ষণ করে",
      "শুধুমাত্র রেইনফরেস্ট অ্যালায়েন্স-প্রত্যয়িত খামার থেকে সংগৃহীত",
      "সম্পূর্ণ কম্পোস্টযোগ্য প্যাকেজিং — বাক্স, পাউচ ও কালি",
      "ব্রিউয়িং গাইড ও ফ্লেভার ম্যাপ অন্তর্ভুক্ত",
    ],
    specs: [
      { label: "বিষয়বস্তু", value: "১২টি মিশ্রণ × ১০ গ্রাম (মোট ১২০ গ্রাম)" },
      { label: "পরিবেশন", value: "প্রতি বাক্সে ~৬০ কাপ" },
      { label: "ক্যাফেইন", value: "৬টি মিশ্রণ ক্যাফেইনমুক্ত, ৬টিতে সামান্য ক্যাফেইন" },
      { label: "মেয়াদ", value: "অখোলা অবস্থায় ১৮ মাস" },
      { label: "প্যাকেজিং", value: "১০০% কম্পোস্টযোগ্য" },
      { label: "সার্টিফিকেশন", value: "জৈব, রেইনফরেস্ট অ্যালায়েন্স" },
    ],
    reviews: [
      { name: "অনন্যা আর.", location: "মুম্বই, ভারত", rating: 5, date: "এপ্রিল ২০২৬", text: "মাকে উপহার দিয়েছিলাম এবং তিনি অসাধারণ খুশি। বৈচিত্র্য অবিশ্বাস্য — আমিও কয়েক কাপ চুরি করছি! আদা-হলুদ মিশ্রণটি অসাধারণ।", verified: true },
      { name: "Sofía M.", location: "Madrid, ES", rating: 5, date: "March 2026", text: "Every single blend is exceptional. I've tried hundreds of herbal teas and this collection stands out for its purity and depth of flavour.", verified: true },
      { name: "James K.", location: "Toronto, CA", rating: 4, date: "February 2026", text: "Shipping was quick and packaging stunning. The hibiscus-rose blend is my daily ritual now.", verified: true },
    ],
  },

  3: {
    name: "টেকসই লিনেন টোট",
    impact: "৩ জন মায়ের জন্য প্রসবপূর্ব ভিটামিন",
    description:
      "পন্ডিচেরির মহিলা-পরিচালিত একটি সমবায় দ্বারা কাটা ও সেলাই করা, এই ওভারসাইজ টোট প্রি-ওয়াশড স্টোনওয়াশড লিনেন থেকে তৈরি — এমন একটি কাপড় যা প্রতিটি ধোয়ার সাথে আরও ভালো হয়। শক্তিশালী ফ্ল্যাট-বটম গাসেট নিশ্চিত করে এটি মুদিখানা বা বাজারের জন্যই হোক আকৃতি ধরে রাখে। একটি ইন্টেরিয়র জিপ পকেট মূল্যবান জিনিস সুরক্ষিত রাখে।",
    features: [
      "১০০% GOTS-প্রত্যয়িত জৈব স্টোনওয়াশড লিনেন",
      "শক্তিশালী গাসেট বটম — ১২ কেজি পর্যন্ত বহন করে",
      "পিতলের হার্ডওয়্যারসহ ইন্টেরিয়র জিপ পকেট",
      "দৃশ্যমান কন্ট্রাস্ট থ্রেডসহ ডাবল-স্টিচড সিম",
      "প্রতিটি ধোয়ার সাথে আরও নরম ও সুন্দর হয়",
    ],
    specs: [
      { label: "মাপ", value: "৪০ × ৩৫ × ১৮ সেমি (দৈর্ঘ্য × উচ্চতা × গভীরতা)" },
      { label: "হাতল", value: "৬০ সেমি — কাঁধে বহনযোগ্য" },
      { label: "উপাদান", value: "২৮০ জিএসএম স্টোনওয়াশড লিনেন" },
      { label: "ভার বহন ক্ষমতা", value: "১২ কেজি পর্যন্ত" },
      { label: "যত্ন", value: "৩০°C এ মেশিনে ধুন, ঝুলিয়ে শুকান" },
      { label: "তৈরি", value: "পন্ডিচেরি, তামিলনাড়ু, ভারত" },
    ],
    reviews: [
      { name: "Clara V.", location: "Paris, FR", rating: 5, date: "March 2026", text: "This is my third Arpan tote — I buy one every season in a different colour. The quality is simply unmatched in this price range.", verified: true },
      { name: "Fatima N.", location: "Dubai, UAE", rating: 4, date: "February 2026", text: "Sturdy, beautiful and ethical. The linen texture is wonderful. Deducting one star only because I wish it came in more colours.", verified: true },
      { name: "Alice B.", location: "Melbourne, AU", rating: 5, date: "January 2026", text: "Replaced three synthetic bags with this one. Love that it folds flat and bounces back perfectly.", verified: false },
    ],
  },

  4: {
    name: "কারিগর ক্লে ফেস মাস্ক সেট",
    impact: "১টি চক্ষু পরীক্ষায় অর্থায়ন করে",
    description:
      "ভারত ও মরক্কোর কারিগর উৎপাদকদের কাছ থেকে সংগৃহীত আগ্নেয়গিরির ছাই, সাদা কাওলিন, লাল মাটি ও চারকোল থেকে মিশ্রিত খনিজ-সমৃদ্ধ ফেসিয়াল মাস্কের ছয়-পিস সেট। প্রতিটি মাস্ক সক্রিয় খনিজ সামগ্রী সংরক্ষণ করতে কোল্ড-মিলড করা হয়। সুগন্ধমুক্ত ও চর্মরোগ বিশেষজ্ঞ-পরীক্ষিত, সংবেদনশীল ত্বকসহ সব ধরনের ত্বকের জন্য উপযুক্ত।",
    features: [
      "পৃথকভাবে হাতে তৈরি সিরামিক পটে ৬টি খনিজ মাস্ক",
      "সক্রিয় খনিজ সামগ্রী সংরক্ষণে কোল্ড-মিলড",
      "সুগন্ধমুক্ত, চর্মরোগ বিশেষজ্ঞ-পরীক্ষিত, সংবেদনশীল ত্বকের জন্য উপযুক্ত",
      "কোনো প্যারাবেন, সালফেট, সিলিকোন বা কৃত্রিম সংরক্ষণকারী নেই",
      "পটগুলি পুনর্ব্যবহারযোগ্য — পরবর্তী অর্ডারে রিফিল পাউচ অনুরোধ করুন",
    ],
    specs: [
      { label: "বিষয়বস্তু", value: "৬টি মাস্ক × ৩০ গ্রাম (মোট ১৮০ গ্রাম)" },
      { label: "ত্বকের ধরন", value: "সব ধরন, সংবেদনশীল ত্বকসহ" },
      { label: "ব্যবহারের মাত্রা", value: "সপ্তাহে ১-২ বার" },
      { label: "মেয়াদ", value: "অখোলা ২৪ মাস, খোলার পর ৬ মাস" },
      { label: "সার্টিফিকেশন", value: "ক্রুয়েলটি-ফ্রি, ভিগান, চর্মরোগ বিশেষজ্ঞ-পরীক্ষিত" },
      { label: "পট", value: "হাতে তৈরি টেরাকোটা, পুনর্ব্যবহারযোগ্য" },
    ],
    reviews: [
      { name: "নাদিয়া কে.", location: "কায়রো, মিশর", rating: 5, date: "এপ্রিল ২০২৬", text: "আমার ত্বক এত ভালো আগে কখনো ছিল না। আগ্নেয়গিরির ছাই মাস্কটি অসাধারণ — তিনটি ব্যবহারের পরেই ছিদ্রগুলি দৃশ্যত ছোট হয়েছে।", verified: true },
      { name: "Hannah P.", location: "New York, US", rating: 5, date: "March 2026", text: "Finally a clay mask set that doesn't strip my sensitive skin. The ceramic pots are gorgeous on my shelf.", verified: true },
      { name: "Ji-yeon L.", location: "Seoul, KR", rating: 4, date: "February 2026", text: "Very effective and love that it's cruelty-free. The charcoal mask is my favourite for T-zone control.", verified: true },
    ],
  },

  5: {
    name: "বাঁশের রান্নাঘর আবশ্যিক কিট",
    impact: "২ জন রোগীর জন্য অস্ত্রোপচার ড্রেসিং",
    description:
      "কর্ণাটকে জন্মানো FSC-প্রত্যয়িত মোসো বাঁশ থেকে তৈরি তেরো-পিসের ব্যাপক কিট — কাটিং বোর্ড ও সার্ভিং চামচ থেকে তেলের ডিসপেন্সার ও পাত্র রাখার জায়গা পর্যন্ত সব। বাঁশ কঠিন কাঠের কয়েক দশকের বিপরীতে মাত্র চার বছরে পরিপক্ক হয়, এটিকে সবচেয়ে পুনরুৎপাদনযোগ্য উপকরণগুলির একটি করে তোলে। খাদ্য-নিরাপদ খনিজ তেল দিয়ে শেষ করা।",
    features: [
      "FSC-প্রত্যয়িত মোসো বাঁশ থেকে ১৩-পিস সেট",
      "খাদ্য-গ্রেড খনিজ তেল দিয়ে শেষ — কোনো বিষাক্ত বার্নিশ নেই",
      "বাঁশ প্রাকৃতিকভাবে অ্যান্টিমাইক্রোবিয়াল — কোনো রাসায়নিক চিকিৎসার প্রয়োজন নেই",
      "মোসো ৪ বছরে কাটার উপযুক্ত হয়, বনাম কঠিন কাঠের ৪০+ বছর",
      "প্রতিটি পিস ব্যাচ ও কারিগর আইডিসহ লেজার-এনগ্রেভড",
    ],
    specs: [
      { label: "পিস সংখ্যা", value: "১৩ (বাক্সের ভেতরের কার্ডে সম্পূর্ণ তালিকা)" },
      { label: "উপাদান", value: "FSC মোসো বাঁশ" },
      { label: "ফিনিশ", value: "কোল্ড-প্রেসড খাদ্য-গ্রেড খনিজ তেল" },
      { label: "যত্ন", value: "শুধুমাত্র হাতে ধুন; মাসিক তেল দিন" },
      { label: "কাটিং বোর্ড", value: "৩৫ × ২৫ × ১.৮ সেমি" },
      { label: "সার্টিফিকেশন", value: "FSC, খাদ্য-নিরাপদ EU/FDA সম্মত" },
    ],
    reviews: [
      { name: "Marco B.", location: "Rome, IT", rating: 5, date: "March 2026", text: "Replaced all my plastic kitchen tools in one order. The build quality is outstanding and the bamboo has a beautiful grain. Very happy.", verified: true },
      { name: "লায়লা এইচ.", location: "তেহরান, ইরান", rating: 5, date: "মার্চ ২০২৬", text: "গৃহপ্রবেশের নিখুঁত উপহার। বোন বিশ্বাস করতে পারেননি। আমরা এখন তিনটি সেট অর্ডার করেছি।", verified: true },
      { name: "David C.", location: "São Paulo, BR", rating: 4, date: "February 2026", text: "Beautiful and sustainable. Only wish it included a knife. Otherwise exceptional value.", verified: false },
    ],
  },

  6: {
    name: "কোল্ড-প্রেসড আর্গান তেল",
    impact: "১০ পরিবারের জন্য ওআরএস স্যালাইন",
    description:
      "সাউস-মাসা অঞ্চলে একটি বার্বার মহিলা সমবায় দ্বারা হাতে তোলা মরক্কান আর্গান কার্নেল থেকে কোল্ড-প্রেসড, এই তেল ভিটামিন ই, ওলেইক অ্যাসিড ও বিরল স্টেরোলিনের প্রতিটি চিহ্ন সংরক্ষণ করতে তাপ বা রাসায়নিক দ্রাবক ছাড়াই নিষ্কাশন করা হয়। বিশুদ্ধতার জন্য ট্রিপল-ফিল্টার, এটি ত্বকে দ্রুত শোষণ করে কোনো তৈলাক্ততা ছাড়াই।",
    features: [
      "১০০% বিশুদ্ধ কোল্ড-প্রেসড আর্গান তেল — কোনো ক্যারিয়ার তেল বা সংযোজন নেই",
      "বিশুদ্ধতার জন্য ট্রিপল-ফিল্টার",
      "সাউস-মাসায় একটি বার্বার মহিলা সমবায় দ্বারা নিষ্কাশিত",
      "ভিটামিন ই, ওলেইক অ্যাসিড ও বিরল উদ্ভিদ স্টেরোলিনে সমৃদ্ধ",
      "সেকেন্ডে শোষণ করে — ত্বক বা চুলে কোনো অবশিষ্ট থাকে না",
    ],
    specs: [
      { label: "পরিমাণ", value: "৬০ মিলি" },
      { label: "উৎপত্তি", value: "সাউস-মাসা, মরক্কো" },
      { label: "নিষ্কাশন", value: "কোল্ড-প্রেসড, কোনো দ্রাবক নেই" },
      { label: "ফিল্টারেশন", value: "ট্রিপল-ফিল্টার" },
      { label: "মেয়াদ", value: "চাপ দেওয়ার তারিখ থেকে ২৪ মাস" },
      { label: "সার্টিফিকেশন", value: "COSMOS জৈব, ন্যায্য বাণিজ্য" },
    ],
    reviews: [
      { name: "ইয়াসমিন এ.", location: "কাসাব্লাঙ্কা, মরক্কো", rating: 5, date: "এপ্রিল ২০২৬", text: "মরক্কোর মানুষ হিসেবে আমি আর্গান সম্পর্কে ভালো জানি। দেশের বাইরে আমার দাদির ব্যবহার করা আর্গানের সবচেয়ে কাছাকাছি এটি। অসাধারণ।", verified: true },
      { name: "Elena R.", location: "Milan, IT", rating: 5, date: "March 2026", text: "I use it as a serum under moisturiser and my skin texture has transformed in eight weeks. Worth every penny.", verified: true },
      { name: "Sarah M.", location: "Chicago, US", rating: 5, date: "February 2026", text: "Best argan oil I've tried. A little goes a very long way — one bottle lasts me two months.", verified: true },
    ],
  },

  7: {
    name: "পুনর্ব্যবহৃত চামড়ার ডায়েরি",
    impact: "১ জন ব্যক্তির স্বাস্থ্য পরীক্ষা",
    description:
      "প্রতিটি ডায়েরি কানপুর ট্যানারির উচ্ছিষ্ট থেকে উদ্ধার করা চামড়ার একক টুকরো দিয়ে বাঁধা — যা অন্যথায় ভাগাড়ে যেত। ভেতরে ২৪০ শিট ৯০ জিএসএম অ্যাসিড-ফ্রি কাগজ রয়েছে — ফাউন্টেন পেন, ব্রাশ পেন বা জলরঙের জন্য যথেষ্ট পুরু। হাতে সেলাই করা মেরুদণ্ড, পিতলের কোণার গার্ড ও ম্যাগনেটিক ক্লাস্প এটিকে শেষ করতে অনিচ্ছুক করে তোলে।",
    features: [
      "একক-টুকরো পুনর্ব্যবহৃত কানপুর ট্যানারি চামড়ার কভার",
      "২৪০ শিট ৯০ জিএসএম অ্যাসিড-ফ্রি, ফাউন্টেন পেন-বান্ধব কাগজ",
      "হাতে সেলাই করা কপটিক বাইন্ডিং খোলা অবস্থায় সমতল থাকে",
      "পিতলের কোণার গার্ড ও ম্যাগনেটিক ক্লাস্প",
      "ইলাস্টিক পেন লুপ ও দুটি রিবন বুকমার্ক",
    ],
    specs: [
      { label: "মাপ", value: "A5 (১৪৮ × ২১০ মিমি)" },
      { label: "পৃষ্ঠা সংখ্যা", value: "৪৮০ পৃষ্ঠা (২৪০ শিট)" },
      { label: "কাগজের ওজন", value: "৯০ জিএসএম অ্যাসিড-ফ্রি" },
      { label: "বাইন্ডিং", value: "কপটিক হাতে সেলাই করা" },
      { label: "কভার", value: "পুনর্ব্যবহৃত ফুল-গ্রেইন চামড়া" },
      { label: "তৈরি", value: "কানপুর, উত্তর প্রদেশ, ভারত" },
    ],
    reviews: [
      { name: "Oliver N.", location: "Berlin, DE", rating: 5, date: "March 2026", text: "As a daily journaller for twelve years, this is the best paper I've written on. The Coptic binding is flawless and the leather has a gorgeous patina developing already.", verified: true },
      { name: "জারা এফ.", location: "লন্ডন, যুক্তরাজ্য", rating: 4, date: "ফেব্রুয়ারি ২০২৬", text: "সুন্দর মান। আমার Lamy ফাউন্টেন পেনে কাগজ দারুণ — কোনো ব্লিড-থ্রু নেই। খুব সন্তুষ্ট।", verified: true },
      { name: "Kenji W.", location: "Tokyo, JP", rating: 5, date: "January 2026", text: "Bought five as gifts and one for myself. Everyone loved them. The upcycled leather story makes it even more special.", verified: false },
    ],
  },

  8: {
    name: "ওয়েলনেস রিচুয়াল গিফট বক্স",
    impact: "৩ সেশন ফিজিওথেরাপি",
    description:
      "আমাদের অভ্যন্তরীণ বিশেষজ্ঞ দলের কিউরেট করা নয়টি পূর্ণ-আকারের ওয়েলনেস এসেনশিয়াল সমন্বিত একটি সুচিন্তিত রিচুয়াল কিট: ধ্যান কুশন, আর্গান তেল, ভেষজ চা সংগ্রহ, একটি মোমবাতি, রোজ কোয়ার্টজ গুয়া শা টুল, একটি লিনেন আই পিলো, হাতে তৈরি ধূপ বান্ডেল, একটি ডিজিটাল ওয়েলনেস গাইড এবং একটি ব্যক্তিগতকৃত প্রভাব কার্ড।",
    features: [
      "নয়টি পূর্ণ-আকারের পণ্য — কোনো ট্র্যাভেল সাইজ নেই",
      "QR লিংকসহ আপনার অর্থায়িত কর্মসূচির ব্যক্তিগতকৃত প্রভাব কার্ড",
      "কটন রিবনসহ হাতে শেষ করা পুনর্ব্যবহারযোগ্য উপহার বাক্সে আসে",
      "প্রত্যয়িত ওয়েলনেস বিশেষজ্ঞদের দ্বারা কিউরেট করা",
      "বিনামূল্যে হাতে লেখা উপহার বার্তা — চেকআউটে আপনার নোট যোগ করুন",
    ],
    specs: [
      { label: "বিষয়বস্তু", value: "৯টি পূর্ণ-আকারের আইটেম (বিবরণে সম্পূর্ণ তালিকা)" },
      { label: "বাক্সের মাপ", value: "৩৪ × ২৮ × ১৪ সেমি" },
      { label: "বাক্সের উপাদান", value: "পুনর্ব্যবহৃত বোর্ড, জলভিত্তিক কালি" },
      { label: "উপহার মোড়ক", value: "অন্তর্ভুক্ত, কটন রিবন" },
      { label: "প্রেরণ", value: "২-৩ কার্যদিবস (উপহার আইটেম অগ্রাধিকারপ্রাপ্ত)" },
      { label: "কাস্টমাইজেশন", value: "উপহার বার্তা এবং পণ্য অদলবদল উপলব্ধ" },
    ],
    reviews: [
      { name: "রিয়া ডি.", location: "দিল্লি, ভারত", rating: 5, date: "এপ্রিল ২০২৬", text: "বান্ধবীকে জন্মদিনে উপহার দিয়েছিলাম এবং সে কেঁদে ফেলেছিল। প্রতিটি আইটেমের মান অসাধারণ এবং ব্যক্তিগতকৃত প্রভাব কার্ডটি একটি সুন্দর স্পর্শ ছিল।", verified: true },
      { name: "Charlotte B.", location: "Paris, FR", rating: 5, date: "March 2026", text: "I've bought luxury wellness gift sets at three times the price and none have matched this for quality, thoughtfulness, or purpose.", verified: true },
      { name: "অদিতি পি.", location: "পুনে, ভারত", rating: 5, date: "ফেব্রুয়ারি ২০২৬", text: "অস্ত্রোপচার থেকে সুস্থ হওয়া মাকে পাঠিয়েছিলাম। তিনি ফোন করে বলেছেন এটি তাঁর পাওয়া সবচেয়ে চিন্তাশীল উপহার।", verified: true },
    ],
  },
};
