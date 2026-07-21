/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, Briefcase, GraduationCap, Heart, Folder, FileText, Settings, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectCard } from '../types';

const WORKSPACE_PROJECTS: ProjectCard[] = [
  {
    id: 'proj-web',
    title: 'Website Project',
    category: 'Website',
    colorClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    description: 'Build websites with AI conversations, planning, coding assistance and image generation.',
  },
  {
    id: 'proj-bus',
    title: 'Business Workspace',
    category: 'Business',
    colorClass: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    description: 'Marketing, proposals, strategy, planning, customer support and business conversations.',
  },
  {
    id: 'proj-sch',
    title: 'Study Workspace',
    category: 'Study',
    colorClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    description: 'Research, PDFs, OCR, notes, assignments and learning with AI.',
  },
  {
    id: 'proj-pers',
    title: 'Personal Workspace',
    category: 'Personal',
    colorClass: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    description: 'Writing, planning, journaling, travel ideas, productivity and everyday assistance.',
  },
];

const categoryIconMap: Record<string, React.FC<{ className?: string }>> = {
  Website: Globe,
  Business: Briefcase,
  Study: GraduationCap,
  Personal: Heart,
};

export const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-24 px-6 bg-white dark:bg-neutral-950 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative emerald line/ambient glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
              Isolated Workspace Containers
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Isolate Your Thoughts with Workspaces
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Organize instructions, custom instructions, conversation parameters, and document bundles inside compartmentalized, high-security containers.
            </p>
          </div>
          
          <button className="group inline-flex items-center space-x-2 text-sm font-bold text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 transition-colors cursor-pointer shrink-0">
            <span>Learn about system security</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bento/Floating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKSPACE_PROJECTS.map((proj, idx) => {
            const CatIcon = categoryIconMap[proj.category];
            // Apply unique floating animation delay based on index for natural organic rhythms
            const floatY = [0, -10, 0];
            const floatTransition = {
              duration: 5 + idx * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
            };

            return (
              <motion.div
                key={proj.id}
                animate={{ y: floatY }}
                transition={floatTransition}
                className="group p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-emerald-500/35 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/80 shadow-sm transition-all duration-300 flex flex-col justify-between min-h-[300px]"
              >
                <div className="space-y-5">
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${proj.colorClass}`}>
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                      {proj.category} Core
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-bold text-neutral-900 dark:text-neutral-100">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Workspace Container Status */}
                <div className="mt-6 pt-5 border-t border-neutral-200/70 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                  <span className="flex items-center text-emerald-500 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                    Trelvix Workspace
                  </span>
                  <span>Isolated Context</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
