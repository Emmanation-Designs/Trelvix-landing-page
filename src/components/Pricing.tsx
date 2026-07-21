/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Star, Shield, ArrowRight, Zap, Award } from 'lucide-react';
import { PricingTier } from '../types';

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: '/ month',
    description: 'Perfect for exploring everyday tasks and creative image generation.',
    benefits: [
      'Powerful AI assistant access',
      'Basic writing & translation assistance',
      'Fundamental image generation capabilities',
      'Isolated personal workspace container',
      'Standard platform speed',
    ],
    ctaText: 'Get Started Free',
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '$10',
    period: '/ month',
    description: 'Designed for professionals demanding higher logic outputs and advanced vision analysis.',
    benefits: [
      'Priority fast response processing',
      'Access to advanced reasoning cores',
      'Accelerated image generation nodes',
      'Full visual document analysis',
      'Up to 4 isolated workspace containers',
      'Priority customer processing',
    ],
    isPopular: true,
    ctaText: 'Get Started with Plus',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$30',
    period: '/ month',
    description: 'Ultimate cognitive horsepower for developers, research scientists, and advanced workflows.',
    benefits: [
      'Uncapped fast responses',
      'Advanced reasoning with priority lanes',
      'Full access to professional intelligence cores',
      'Unlimited image generation & in-line edits',
      'Unlimited isolated workspace containers',
      'Full workspace organization & context memory',
      'Dedicated priority infrastructure support',
    ],
    ctaText: 'Get Started with Pro',
  },
];

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getPrice = (tier: PricingTier) => {
    if (tier.price === '$0') return '$0';
    const amount = parseInt(tier.price.replace('$', ''));
    if (billingCycle === 'yearly') {
      // 20% discount
      return `$${Math.round(amount * 0.8)}`;
    }
    return `$${amount}`;
  };

  const getPeriodText = (tier: PricingTier) => {
    if (tier.price === '$0') return '';
    return billingCycle === 'yearly' ? '/ month, billed yearly' : '/ month';
  };

  return (
    <section 
      id="pricing" 
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Absolute decorative gradient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Platform Ingress
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Tailored Cognitive Investment
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Invest in the tier that aligns with your logical throughput requirements. No hard caps, no technical model jargon—just sheer capacity.
          </p>
        </div>

        {/* Billing Cycle Switcher */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-400 dark:text-neutral-500'}`}>
            Monthly Cycle
          </span>
          
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-12 h-6 sm:w-14 sm:h-7 rounded-full bg-neutral-200 dark:bg-neutral-800 p-1 flex items-center transition-colors duration-300 relative cursor-pointer"
            aria-label="Toggle billing cycle"
          >
            <div 
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 shadow-sm transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0'
              }`} 
            />
          </button>

          <div className="flex items-center space-x-1.5">
            <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${billingCycle === 'yearly' ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-400 dark:text-neutral-500'}`}>
              Annual Saving
            </span>
            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/15">
              -20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 ${
                tier.isPopular
                  ? 'border-emerald-500 dark:border-emerald-400/80 shadow-[0_20px_50px_rgba(16,185,129,0.06)] scale-100 lg:scale-[1.03] z-10'
                  : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm'
              }`}
            >
              {/* Popular Badge Glow */}
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-md">
                  MOST PREFERRED
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-neutral-900 dark:text-neutral-50">
                    {tier.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans min-h-[40px]">
                    {tier.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline space-x-1.5 py-4 border-y border-neutral-100 dark:border-neutral-800/80">
                  <span className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                    {getPrice(tier)}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-400 dark:text-neutral-500">
                    {getPeriodText(tier)}
                  </span>
                </div>

                {/* Benefits List */}
                <ul className="space-y-3.5 pt-2">
                  {tier.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-tight">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center shrink-0 text-emerald-500 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <a
                  href="https://trelvixai.com"
                  className={`group relative w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm cursor-pointer overflow-hidden ${
                    tier.isPopular
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 shadow-emerald-500/20'
                      : 'text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
