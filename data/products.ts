export type Product = {
  slug: string;

  name: string;

  collection: "Essentials" | "Signature";

  category: "Bar Soap";

  status: "In Stock";

  price: number;

  image: string;

  gallery: string[];

  shortDescription: string;

  description: string;

  fragrance: string;

  weight: string;

  ingredients: string[];

  benefits: string[];

  featured: boolean;

  badge?: string;

  rating?: number;

  reviews?: number;

  scentNotes?: string[];

  bestFor?: string[];

  skinType?: string;

  color?: string;

  href?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "midnight-calm",

    name: "Midnight Calm",

    collection: "Essentials",

    category: "Bar Soap",

    status: "In Stock",

    price: 219,

    image: "/images/products/Midnight-calm.png",

    gallery: [
      "/images/products/Midnight-calm.png",
      "/images/products/Midnight-calm-2.png",
      "/images/products/Midnight-calm-3.png",
    ],

    shortDescription:
      "A botanical detox soap with activated charcoal, kaolin clay, and calming chamomile & eucalyptus.",

    description:
      "Midnight Calm is a handcrafted botanical detox bar designed for a deep, refreshing cleanse. Activated charcoal helps lift dirt and impurities, while kaolin clay gently purifies and refines the skin. Aloe vera oil and vitamin E help leave skin feeling soft and nourished, finished with a calming chamomile and eucalyptus aroma.",

    fragrance: "Chamomile & Eucalyptus",

    weight: "100 g",

    ingredients: [
      "Activated Charcoal",
      "Kaolin Clay",
      "Olive Oil",
      "Aloe Vera Oil",
      "Vitamin E",
      "Chamomile & Eucalyptus",
    ],

    benefits: [
      "Deep Cleansing",
      "Purifying",
      "Helps Remove Impurities",
      "Gentle Daily Use",
      "Calming Aroma",
    ],

    featured: true,

    badge: "NEW",

    scentNotes: [
      "Chamomile",
      "Eucalyptus",
    ],

    bestFor: [
      "Deep Cleansing",
      "Refreshing",
      "Daily Body Care",
    ],

    skinType: "All Skin Types",

    color: "Charcoal Black",
  },

  {
    slug: "silk-meadow",

    name: "Silk Meadow",

    collection: "Essentials",

    category: "Bar Soap",

    status: "In Stock",

    price: 229,

    image: "/images/products/Silk-meadow.png",

    gallery: [
      "/images/products/Silk-meadow.png",
      "/images/products/Silk-meadow-2.png",
      "/images/products/Silk-meadow-3.png",
    ],

    shortDescription:
      "A luxurious handcrafted soap with colloidal oats, goat milk, aloe vera oil, and vitamin E.",

    description:
      "Silk Meadow is a gentle, luxurious handcrafted soap created for soft, nourished-looking skin. Colloidal oats help soothe and comfort the skin, while goat milk provides a creamy, moisturizing lather. Aloe vera oil and vitamin E help leave skin feeling hydrated, soft, and cared for.",

    fragrance: "Soft & Gentle",

    weight: "100 g",

    ingredients: [
      "Colloidal Oats",
      "Goat Milk",
      "Aloe Vera Oil",
      "Vitamin E",
    ],

    benefits: [
      "Gentle Cleansing",
      "Soothing",
      "Moisturizing",
      "Softening",
      "Rich Creamy Lather",
    ],

    featured: true,

    badge: "NEW",

    scentNotes: [
      "Soft",
      "Gentle",
    ],

    bestFor: [
      "Gentle Care",
      "Dry Skin",
      "Sensitive Skin",
      "Daily Use",
    ],

    skinType: "Dry & Sensitive Skin",

    color: "Blush Pink & Cream",
  },

  {
    slug: "golden-harmony",

    name: "Golden Harmony",

    collection: "Essentials",

    category: "Bar Soap",

    status: "In Stock",

    price: 219,

    image: "/images/products/Golden-harmony.png",

    gallery: [
      "/images/products/Golden-harmony.png",
      "/images/products/Golden-harmony-2.png",
      "/images/products/Golden-harmony-3.png",
    ],

    shortDescription:
      "A handcrafted turmeric, goat milk, and kojic powder soap for soft, radiant-looking skin.",

    description:
      "Golden Harmony combines turmeric, goat milk, and kojic powder in a handcrafted bar designed to leave skin feeling clean, soft, and nourished. Turmeric helps promote a brighter-looking, more even-looking complexion, while goat milk provides a creamy, moisturizing lather. Kojic powder is a popular skincare ingredient used to help improve the appearance of uneven skin tone over time.",

    fragrance: "Warm & Natural",

    weight: "100 g",

    ingredients: [
      "Turmeric",
      "Goat Milk",
      "Kojic Powder",
    ],

    benefits: [
      "Gentle Cleansing",
      "Moisturizing",
      "Rich Creamy Lather",
      "Radiant-Looking Skin",
      "Nourishing",
    ],

    featured: true,

    badge: "NEW",

    scentNotes: [
      "Warm",
      "Natural",
    ],

    bestFor: [
      "Radiant-Looking Skin",
      "Daily Body Care",
      "Face & Body",
    ],

    skinType: "All Skin Types",

    color: "Golden Turmeric",
  },
];