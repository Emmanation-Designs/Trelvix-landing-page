/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FeatureCarousel } from '../components/FeatureCarousel';
import { ImageShowcase } from '../components/ImageShowcase';
import { Sparkles, Zap, Shield, Code, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export const Features: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Premium Features Page Header */}
      <section className="relative py-20 px-6 overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-500">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Cognitive Suite
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 max-w-4xl mx-auto leading-tight">
            Designed for Absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Mental Clarity</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Discover a synchronized workspace where reasoning, generation, vision, and project isolation co-exist natively under sub-second response times.
          </p>

          {/* Feature highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
            <div className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/20 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Multi-Model Reasoning</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Dynamic model graduation pathways that scale logical complexity automatically depending on your queries.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/20 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Context Isolation</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Never mix codes or context. Run distinct projects in completely segmented workspace vaults with custom parameters.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/20 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Sub-Second Pipelines</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Ultra low-latency streaming pipelines for voice speech, chat responses, and creative asset rendering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Carousel */}
      <FeatureCarousel />

      {/* Image Showcase */}
      <ImageShowcase />
    </div>
  );
};
