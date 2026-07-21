/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, X, Shield, Globe, Star, Sparkles, MessageSquare, Mic, Layers, Cpu } from 'lucide-react';
import { ComparisonPoint } from '../types';

const COMPARISON_DATA: ComparisonPoint[] = [
  {
    feature: 'Unified Workspace',
    trelvix: 'All-in-one unified context',
    competitors: 'Fragmented apps & browser tabs',
    description: 'Chat, canvas, image generation, voice, and project isolation co-exist in one synchronized context.',
  },
  {
    feature: 'Premium UX Design',
    trelvix: 'Crafted typography, glass layout',
    competitors: 'Cookie-cutter generic sidebars',
    description: 'Bespoke corporate-grade interfaces styled with custom negative spacing and dynamic lighting.',
  },
  {
    feature: 'Fast Intelligence',
    trelvix: 'Sub-second instant responses',
    competitors: 'Queued requests & network lag',
    description: 'Parallel routing architectures with auto-graduated logical depth matching for any task query.',
  },
  {
    feature: 'Project Containers',
    trelvix: 'Isolated memory & context pools',
    competitors: 'Flat history lists with overlaps',
    description: 'Store instructions, files, and styles in isolated vaults to ensure complete logical partitioning.',
  },
  {
    feature: 'Generative Image Cores',
    trelvix: 'In-line generative 3D & vector nodes',
    competitors: 'Secondary tools or external portals',
    description: 'Edit, paint, expand, and generate aspect-locked graphics directly within active conversations.',
  },
  {
    feature: 'Continuous Voice Flow',
    trelvix: 'Instant continuous speech synthesis',
    competitors: 'Push-to-talk block recordings',
    description: 'Organic stream-in and stream-out oral loops with realistic cadence, breathing, and low latency.',
  },
  {
    feature: 'Extensible Platform',
    trelvix: 'Advanced agent toolchains',
    competitors: 'Static document chat models',
    description: 'Fully integrated with autonomous agents, rich canvas workflows, and secure workspace isolation features.',
  },
];

export const WhyTrelvix: React.FC = () => {
  return (
    <section 
      id="why-trelvix" 
      className="py-24 px-6 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Comparative Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            A Higher Class of Intelligence
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Discover why leading software engineers, designers, and corporate planners prefer Trelvix AI over typical isolated systems.
          </p>
        </div>

        {/* Comparison Table / Cards for Mobile */}
        <div className="hidden lg:block rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/10 shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-8 py-5 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
            <div className="col-span-4">CAPABILITY PARAMETER</div>
            <div className="col-span-4 text-emerald-500 dark:text-emerald-400">TRELVIX AI ENGINE</div>
            <div className="col-span-4">LEGACY PLATFORMS</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800/80">
            {COMPARISON_DATA.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-neutral-50/80 dark:hover:bg-neutral-900/20 transition-colors"
              >
                {/* Capability & Details */}
                <div className="col-span-4 pr-6 space-y-1">
                  <h3 className="text-sm sm:text-base font-sans font-bold text-neutral-900 dark:text-neutral-100">
                    {row.feature}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                    {row.description}
                  </p>
                </div>

                {/* Trelvix */}
                <div className="col-span-4 flex items-start space-x-3 text-sm font-semibold text-neutral-800 dark:text-neutral-100 font-sans">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500 shadow-sm mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{row.trelvix}</span>
                </div>

                {/* Competitors */}
                <div className="col-span-4 flex items-start space-x-3 text-sm font-medium text-neutral-400 dark:text-neutral-500 font-sans">
                  <div className="w-5 h-5 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-800/40 flex items-center justify-center shrink-0 text-neutral-400 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span>{row.competitors}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion/Cards View */}
        <div className="lg:hidden space-y-6">
          {COMPARISON_DATA.map((row, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/25 space-y-4"
            >
              <h3 className="text-base font-sans font-bold text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                {row.feature}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                {row.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 font-bold">Trelvix AI</span>
                  <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 leading-snug">
                    {row.trelvix}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">Legacy</span>
                  <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 leading-snug">
                    {row.competitors}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
