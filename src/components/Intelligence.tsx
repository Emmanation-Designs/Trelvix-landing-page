/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, Brain, ShieldAlert, Sparkles, Code, Cpu, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface IntelligenceLevel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  speed: number;      // 1-100 rating
  depth: number;      // 1-100 rating
  complexity: number; // 1-100 rating
  icon: React.FC<{ className?: string }>;
  color: string;
  accentClass: string;
}

const INTELLIGENCE_LEVELS: IntelligenceLevel[] = [
  {
    id: 'fast-responses',
    name: 'Fast Responses',
    tagline: 'Sub-Second Productivity Engine',
    description: 'Optimized for high-speed dynamic conversations, smart writing, quick document intelligence summaries, and instant knowledge lookup.',
    badge: 'Near-Zero Latency',
    speed: 98,
    depth: 45,
    complexity: 35,
    icon: Zap,
    color: 'from-emerald-400 to-teal-500',
    accentClass: 'border-emerald-500/20 group-hover:border-emerald-500/40 shadow-emerald-500/5',
  },
  {
    id: 'advanced-reasoning',
    name: 'Advanced Reasoning',
    tagline: 'Complex Logic Synthesis',
    description: 'Dedicated processing for advanced coding, technical problem solving, structured analysis, and research-driven workflows.',
    badge: 'High Logical Fidelity',
    speed: 75,
    depth: 85,
    complexity: 80,
    icon: Brain,
    color: 'from-teal-500 to-emerald-600',
    accentClass: 'border-teal-500/20 group-hover:border-teal-500/40 shadow-teal-500/5',
  },
  {
    id: 'professional-intelligence',
    name: 'Professional Intelligence',
    tagline: 'Uncompromising Cognitive Power',
    description: 'The highest operational tier designed for multi-layered system planning, full-scale codebases, and rigorous academic calculations.',
    badge: 'Maximum Horsepower',
    speed: 40,
    depth: 100,
    complexity: 100,
    icon: Cpu,
    color: 'from-emerald-500 via-teal-500 to-teal-700',
    accentClass: 'border-emerald-400/35 group-hover:border-emerald-400/60 shadow-emerald-400/10',
  },
];

export const Intelligence: React.FC = () => {
  return (
    <section 
      id="intelligence" 
      className="py-24 px-6 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Cognitive Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Engineered for High-Order Outcomes
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Trelvix AI adapts to the exact logical depth required for your workload, offering sub-second everyday responses up to advanced reasoning capabilities.
          </p>
        </div>

        {/* Bento Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INTELLIGENCE_LEVELS.map((level, idx) => {
            const Icon = level.icon;
            
            return (
              <div
                key={level.id}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:bg-neutral-100/55 dark:hover:bg-neutral-900/80 hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.12)] transition-all duration-300 overflow-hidden"
              >
                {/* Glowing Background Glow on Card Hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${level.color} p-[1px] flex items-center justify-center shadow-md`}>
                      <div className="w-full h-full bg-white dark:bg-neutral-950 rounded-[15px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/15">
                      {level.badge}
                    </span>
                  </div>

                  {/* Card Titles */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-neutral-900 dark:text-neutral-50">
                      {level.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      {level.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans min-h-[72px]">
                    {level.description}
                  </p>
                </div>

                {/* Metrics / Meters Section */}
                <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 space-y-4 relative z-10">
                  {/* Speed Meter */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono font-medium">
                      <span className="text-neutral-500 dark:text-neutral-400">Response Speed</span>
                      <span className="text-neutral-800 dark:text-neutral-300 font-bold">{level.speed}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level.speed}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-emerald-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Reasoning Depth */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono font-medium">
                      <span className="text-neutral-500 dark:text-neutral-400">Reasoning Index</span>
                      <span className="text-neutral-800 dark:text-neutral-300 font-bold">{level.depth}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level.depth}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-teal-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Complexity Capacity */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono font-medium">
                      <span className="text-neutral-500 dark:text-neutral-400">Context Mesh Depth</span>
                      <span className="text-neutral-800 dark:text-neutral-300 font-bold">{level.complexity}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level.complexity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
