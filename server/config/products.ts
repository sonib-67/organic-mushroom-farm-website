export interface ProductDefinition {
  id: string;
  name: string;
  pricePaise: number;
  description: string;
}

export const PRODUCTS: Record<string, ProductDefinition> = {
  training: {
    id: "training",
    name: "Mushroom Farming Training",
    pricePaise: 29900, // ₹299
    description: "Complete Training Program for Mushroom Farming",
  },
  consultation: {
    id: "consultation",
    name: "Expert Consultation",
    pricePaise: 5900, // ₹59
    description: "1-on-1 Expert Consultation",
  },
  spawn: {
    id: "spawn",
    name: "Mushroom Spawn Seed",
    pricePaise: 99900, // ₹999
    description: "High Quality Mushroom Spawn Seeds",
  },
  fresh: {
    id: "fresh",
    name: "Fresh Mushrooms",
    pricePaise: 25000, // ₹250
    description: "Premium Fresh Organic Mushrooms",
  },
  dry: {
    id: "dry",
    name: "Dry Mushrooms",
    pricePaise: 120000, // ₹1200
    description: "Premium Dry Organic Mushrooms",
  }
};

export function getProduct(type: string): ProductDefinition {
  return PRODUCTS[type] || PRODUCTS["training"]; // Fallback
}
