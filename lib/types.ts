// TODO: Define TypeScript interfaces for the application

export interface BrandProfile {
  id: string;
  user_id: string;
  brand_name: string;
  brand_voice: string;
  target_audience: string;
  product_category: string;
  unique_selling_points: string[];
  competitors: string[];
  created_at: string;
  updated_at: string;
}

export interface Channel {
  id: string;
  brand_id: string;
  platform: "amazon" | "shopify" | "walmart" | "etsy" | "ebay";
  store_url: string;
  is_active: boolean;
  created_at: string;
}

export interface Listing {
  id: string;
  channel_id: string;
  title: string;
  description: string;
  price: number;
  sku: string;
  status: "active" | "draft" | "archived";
  created_at: string;
  updated_at: string;
}

export interface AgentMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  module?: string;
  timestamp: string;
}

export interface AgentRequest {
  messages: AgentMessage[];
  module: string;
  brand_id?: string;
}

export interface AgentResponse {
  message: AgentMessage;
  metadata?: Record<string, unknown>;
}

export interface Metric {
  id: string;
  brand_id: string;
  channel_id: string;
  metric_type: "revenue" | "orders" | "conversion_rate" | "traffic" | "acos";
  value: number;
  date: string;
}

export interface Experiment {
  id: string;
  brand_id: string;
  listing_id: string;
  name: string;
  variant_a: string;
  variant_b: string;
  status: "draft" | "running" | "completed";
  winner?: "a" | "b";
  created_at: string;
  completed_at?: string;
}

export interface Competitor {
  id: string;
  brand_id: string;
  name: string;
  url: string;
  notes: string;
  tracked_since: string;
}

export interface ContentPiece {
  id: string;
  brand_id: string;
  type: "listing_copy" | "ad_copy" | "social_post" | "email";
  title: string;
  body: string;
  status: "draft" | "approved" | "published";
  created_at: string;
}

export interface OnboardingStep {
  step: number;
  title: string;
  description: string;
  isComplete: boolean;
}

export interface ModuleConfig {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}
