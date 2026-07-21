/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Database, Layout, Bot, Users, Sparkles } from 'lucide-react';

interface ActiveFeature {
  id: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  badgeText: string;
}

const ACTIVE_WORKFLOWS: ActiveFeature[] = [
  {
    id: 'live-memory',
    title: 'Conversation Memory',
    description: 'Continuously remembers context, architectural choices, styling rules, and historical references across your workspaces to shape custom profiles.',
    icon: Database,
    badgeText: 'INTEGRATED',
  },
  {
    id: 'live-canvas',
    title: 'Interactive Canvas',
    description: 'A multi-view workspace allowing real-time document co-editing, system layout design, and code modification side-by-side.',
    icon: Layout,
    badgeText: 'LIVE',
  },
  {
    id: 'live-agents',
    title: 'Autonomous AI Agents',
    description: 'Deploy task-oriented software agents that compile code, run unit tests, perform research, and synchronize data autonomously.',
    icon: Bot,
    badgeText: 'STABLE',
  },
  {
    id: 'custom-personas',
    title: 'Custom Persona Workspaces',
    description: 'Configure custom instructions, domain knowledge rules, and tone parameters for each isolated workspace.',
    icon: Sparkles,
    badgeText: 'ADVANCED',
  },
];

export const ComingSoon: React.FC = () => {
  return (
    <section 
      id="ecosystem" 
      className="py-24 px-6 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Active Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Professional Workspace Capabilities
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Gain immediate access to premium workspace modules designed to streamline complex engineering and creative workflows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACTIVE_WORKFLOWS.map((feat) => {
            const Icon = feat.icon;

            return (
              <div
                key={feat.id}
                className="group relative p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-emerald-500/30 hover:bg-neutral-100/40 dark:hover:bg-neutral-900/60 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110 duration-300" />
                    </div>
                    
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/15">
                      {feat.badgeText}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-sans font-bold text-neutral-900 dark:text-neutral-50">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                      {feat.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Dot */}
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/60 flex items-center space-x-2 text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Fully Operational</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
