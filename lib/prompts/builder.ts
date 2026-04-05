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
- **Brand Name:** ${brandProfile.name}
- **Brand Voice:** ${brandProfile.brandVoice}
- **Target Audience:** ${brandProfile.targetAudience}
- **Categories:** ${brandProfile.categories.join(", ")}
- **Price Position:** ${brandProfile.pricePosition}
- **Unique Selling Points:** ${brandProfile.uniqueSellingPoints.join(", ")}
- **Key Competitors:** ${brandProfile.competitors.join(", ")}

Always tailor your responses to align with the brand's voice and target audience described above.
`;

  return `${basePrompt}\n\n${brandContext}`;
}
