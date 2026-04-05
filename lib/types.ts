export interface BrandProfile {
  id: string;
  userId: string;
  name: string;
  description: string;
  categories: string[];
  channels: ChannelConfig[];
  targetAudience: string;
  brandVoice: string;
  competitors: string[];
  pricePosition: "budget" | "mid-range" | "premium" | "luxury";
  uniqueSellingPoints: string[];
  createdAt: string;
}

export interface ChannelConfig {
  platform: "amazon" | "shopify" | "etsy" | "walmart" | "tiktok_shop";
  enabled: boolean;
  storeUrl?: string;
}

export interface Product {
  id: string;
  brandId: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  keywords: string[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface Experiment {
  id: string;
  brandId: string;
  title: string;
  hypothesis: string;
  channel: string;
  metric: string;
  startDate: string;
  endDate?: string;
  status: "planned" | "running" | "completed" | "abandoned";
  result?: string;
  learning?: string;
}

export interface AgentModule {
  id: string;
  icon: string;
  label: string;
  description: string;
  placeholder: string;
  examples: string[];
}
