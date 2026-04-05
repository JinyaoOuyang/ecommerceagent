// TODO: Implement brand context injection into prompts

import { BrandProfile } from "@/lib/types";
import { getModulePrompt } from "@/lib/prompts/base";

export function buildSystemPrompt(
  module: string,
  brandProfile?: BrandProfile | null
): string {
  const basePrompt = getModulePrompt(module);

  if (!brandProfile) {
    return basePrompt;
  }

  const brandContext = `
## Brand Context
- **Brand Name:** ${brandProfile.brand_name}
- **Brand Voice:** ${brandProfile.brand_voice}
- **Target Audience:** ${brandProfile.target_audience}
- **Product Category:** ${brandProfile.product_category}
- **Unique Selling Points:** ${brandProfile.unique_selling_points.join(", ")}
- **Key Competitors:** ${brandProfile.competitors.join(", ")}

Always tailor your responses to align with the brand's voice and target audience described above.
`;

  return `${basePrompt}\n\n${brandContext}`;
}
