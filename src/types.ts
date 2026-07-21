/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  isThinking?: boolean;
  thinkingTime?: number;
  imageUrl?: string;
  isImageGenerating?: boolean;
  isVoiceActive?: boolean;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isComingSoon?: boolean;
  badge?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface ComparisonPoint {
  feature: string;
  trelvix: string | boolean;
  competitors: string | boolean;
  description: string;
}

export interface ProjectCard {
  id: string;
  title: string;
  category: 'Website' | 'Business' | 'School' | 'Study' | 'Personal';
  colorClass: string;
  description: string;
}
