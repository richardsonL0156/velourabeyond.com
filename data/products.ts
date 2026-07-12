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

  // NEW
  scentNotes?: string[];

  // NEW
  bestFor?: string[];

  // NEW
  skinType?: string;

  // NEW
  color?: string;

  // NEW
  href?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "pure-luxe",

    name: "Pure Luxe",

    collection: "Essentials",

    category: "Bar Soap",

    status: "In Stock",

    price: 189,

    image: "/images/products/pure-luxe.png",

    gallery: [
      "/images/products/pure-luxe.png",
      "/images/products/pure-luxe-2.png",
      "/images/products/pure-luxe-3.png",
      "/images/products/pure-luxe-4.png",
    ],

    shortDescription:
      "A gentle fragrance-free handcrafted soap for everyday luxury.",

    description:
      "Pure Luxe delivers a rich creamy lather with nourishing oils that gently cleanse while leaving skin feeling soft, refreshed, and moisturized.",

    fragrance: "Fragrance Free",

    weight: "100 g",

    ingredients: [
      "Palm Oil",
      "Coconut Oil",
      "Olive Oil",
      "Castor Oil",
      "Aloe Vera Oil",
      "Goat Milk",
      "Kaolin Clay",
      "Vitamin E",
      "Honey",
    ],

    benefits: [
      "Gentle Cleansing",
      "Rich Creamy Lather",
      "Moisturizing",
      "Sensitive Skin Friendly",
    ],

    featured: true,
  },

  {
    slug: "tea-blossom",

    name: "Tea Blossom",

    collection: "Essentials",

    category: "Bar Soap",

    status: "In Stock",

    price: 199,

    image: "/images/products/tea-blossom.png",

    gallery: [
      "/images/products/tea-blossom.png",
      "/images/products/tea-blossom-2.png",
      "/images/products/tea-blossom-3.png",
      "/images/products/tea-blossom-4.png",
    ],

    shortDescription:
      "Refreshing White Tea & Chamomile artisan soap.",

    description:
      "A luxurious botanical blend inspired by calming tea gardens, creating a clean and refreshing bathing experience.",

    fragrance: "Fresh • Floral • Relaxing",

    weight: "100 g",

    ingredients: [
      "Palm Oil",
      "Coconut Oil",
      "Olive Oil",
      "Castor Oil",
      "Goat Milk",
      "Kaolin Clay",
      "Vitamin E",
    ],

    benefits: [
      "Refreshing",
      "Hydrating",
      "Rich Lather",
      "Relaxing Aroma",
    ],

    featured: true,
  },

  {
    slug: "citrus-linen",

    name: "Citrus Linen",

    collection: "Essentials",

    category: "Bar Soap",

    status: "In Stock",

    price: 199,

    image: "/images/products/citrus-linen.png",

    gallery: [
      "/images/products/citrus-linen.png",
      "/images/products/citrus-linen-2.png",
      "/images/products/citrus-linen-3.png",
      "/images/products/citrus-linen-4.png",
    ],

    shortDescription:
      "Fresh citrus balanced with crisp clean linen.",

    description:
      "Bright citrus notes meet fresh linen for a clean, energizing soap designed to refresh your skin and awaken your senses.",

    fragrance: "Fresh Linen & Citrus",

    weight: "100 g",

    ingredients: [
      "Palm Oil",
      "Coconut Oil",
      "Olive Oil",
      "Castor Oil",
      "Goat Milk",
      "Kaolin Clay",
      "Vitamin E",
    ],

    benefits: [
      "Fresh Clean Scent",
      "Creamy Foam",
      "Hydrating",
      "Long Lasting",
    ],

    featured: true,
  },

  {
    slug: "golden-rose",

    name: "Golden Rose",

    collection: "Signature",

    category: "Bar Soap",

    status: "In Stock",

    price: 249,

    image: "/images/products/golden-rose.png",

    gallery: [
      "/images/products/golden-rose.png",
      "/images/products/golden-rose-2.png",
      "/images/products/golden-rose-3.png",
      "/images/products/golden-rose-4.png",
    ],

    shortDescription:
      "Elegant floral luxury with warm golden rose notes.",

    description:
      "Golden Rose is crafted for those who appreciate refined floral fragrances, rich creamy lather, and timeless luxury.",

    fragrance: "Golden Rose",

    weight: "100 g",

    ingredients: [
      "Palm Oil",
      "Coconut Oil",
      "Olive Oil",
      "Castor Oil",
      "Goat Milk",
      "Kaolin Clay",
      "Vitamin E",
    ],

    benefits: [
      "Luxury Fragrance",
      "Creamy Lather",
      "Moisturizing",
      "Elegant Finish",
    ],

    featured: true,
  },

  {
    slug: "velvet-berry",

    name: "Velvet Berry",

    collection: "Signature",

    category: "Bar Soap",

    status: "In Stock",

    price: 249,

    image: "/images/products/velvet-berry.png",

    gallery: [
      "/images/products/velvet-berry.png",
      "/images/products/velvet-berry-2.png",
      "/images/products/velvet-berry-3.png",
      "/images/products/velvet-berry-4.png",
    ],

    shortDescription:
      "Rich berries wrapped in soft luxurious notes.",

    description:
      "Velvet Berry offers an indulgent blend of sweet berries with creamy handcrafted soap for an unforgettable bathing experience.",

    fragrance: "Velvet Berry",

    weight: "100 g",

    ingredients: [
      "Palm Oil",
      "Coconut Oil",
      "Olive Oil",
      "Castor Oil",
      "Goat Milk",
      "Kaolin Clay",
      "Vitamin E",
    ],

    benefits: [
      "Luxury Fragrance",
      "Creamy Lather",
      "Hydrating",
      "Long Lasting",
    ],

    featured: true,
  },

  {
    slug: "island-berry",

    name: "Island Berry",

    collection: "Signature",

    category: "Bar Soap",

    status: "In Stock",

    price: 249,

    image: "/images/products/island-berry.png",

    gallery: [
      "/images/products/island-berry.png",
      "/images/products/island-berry-2.png",
      "/images/products/island-berry-3.png",
      "/images/products/island-berry-4.png",
    ],

    shortDescription:
      "A vibrant tropical berry fragrance inspired by island escapes.",

    description:
      "Island Berry combines juicy tropical fruits with handcrafted luxury, producing a creamy, moisturizing lather and a refreshing island-inspired aroma.",

    fragrance: "Island Berry",

    weight: "100 g",

    ingredients: [
      "Palm Oil",
      "Coconut Oil",
      "Olive Oil",
      "Castor Oil",
      "Goat Milk",
      "Kaolin Clay",
      "Vitamin E",
    ],

    benefits: [
      "Tropical Aroma",
      "Rich Creamy Foam",
      "Moisturizing",
      "Luxury Finish",
    ],

    featured: true,
  },
];